import passport from 'passport'
import magicPassport from 'passport-magic'
import magicSDK from '@magic-sdk/admin'

import people from '../services/people.js'

/* 1️⃣ Setup Magic Admin SDK */
const magic = new magicSDK.Magic(process.env.MAGIC_SECRET_KEY)

/* 2️⃣ Implement Auth Strategy */
const MagicStrategy = magicPassport.Strategy

const strategy = new MagicStrategy(async function (person, done) {
  const personMetadata = await magic.users.getMetadataByIssuer(person.issuer)
  const existingPerson = await people.find({ issuer: person.issuer })
  if (!existingPerson) {
    /* Create new person if doesn't exist */
    return signup(person, personMetadata, done)
  } else {
    /* Sign in person if otherwise */
    return login(person, done)
  }
})

passport.use(strategy)

const signup = async (person, personMetadata, done) => {
  let newPerson = {
    issuer: person.issuer,
    email: personMetadata.email,
    lastLoginAt: person.claim.iat,
  }
  await people.create(newPerson)
  return done(null, newPerson)
}

const login = async (person, done) => {
  /* Replay attack protection (https://go.magic.link/replay-attack) */
  if (person.claim.iat <= person.lastLoginAt) {
    return done(null, false, {
      message: `Replay attack detected for person ${person.issuer}}.`,
    })
  }
  await people.update(
    { issuer: person.issuer },
    { $set: { lastLoginAt: person.claim.iat } },
  )
  return done(null, person)
}

/* Defines what data are stored in the session */
passport.serializeUser((person, done) => {
  done(null, person.issuer)
})

/* Populates person data in the req.user object */
passport.deserializeUser(async (id, done) => {
  try {
    const person = await people.find({ issuer: id })
    done(null, person)
  } catch (err) {
    done(err, null)
  }
})

export default (app) => {
  /* Attach middleware to login endpoint */
  app.post('/login', passport.authenticate('magic'), (req, res) => {
    if (req.user) {
      res.status(200).end('User is logged in.')
    } else {
      return res.status(401).end('Could not log user in.')
    }
  })

  /* Implement Logout Endpoint */
  app.post('/logout', async (req, res) => {
    if (req.isAuthenticated()) {
      await magic.users.logoutByIssuer(req.user.issuer)
      req.logout()
      return res.status(200).end()
    } else {
      return res.status(401).end(`User is not logged in.`)
    }
  })
}
