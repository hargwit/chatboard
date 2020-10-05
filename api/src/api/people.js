import express from 'express'
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

/* Defines what data are stored in the user session */
passport.serializeUser((user, done) => {
  done(null, user.issuer)
})

/* Populates user data in the req.user object */
passport.deserializeUser(async (id, done) => {
  try {
    const user = await people.find({ issuer: id })
    done(null, user)
  } catch (err) {
    done(err, null)
  }
})

const route = express.Router()

export default (app) => {
  app.get('/', async (req, res) => {
    if (req.isAuthenticated()) {
      return res.status(200).json(req.user).end()
    } else {
      return res.status(401).end(`User is not logged in.`)
    }
  })

  app.use('/people', route)

  /* Attach middleware to login endpoint */
  route.post('/login', passport.authenticate('magic'), (req, res) => {
    if (req.user) {
      res.status(200).end('User is logged in.')
    } else {
      return res.status(401).end('Could not log user in.')
    }
  })

  /* Implement Logout Endpoint */
  route.post('/logout', async (req, res) => {
    if (req.isAuthenticated()) {
      await magic.users.logoutByIssuer(req.user.issuer)
      req.logout()
      return res.status(200).end()
    } else {
      return res.status(401).end(`User is not logged in.`)
    }
  })
}
