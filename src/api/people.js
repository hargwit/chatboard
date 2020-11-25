// import express from 'express'
// import { Magic } from '@magic-sdk/admin'
// import passport from 'passport'

// import { Strategy as MagicStrategy } from 'passport-magic'

// const magic = new Magic(process.env.MAGIC_SECRET_KEY)

// const strategy = new MagicStrategy(async function (user, done) {
//     const userMetadata = await magic.users.getMetadataByIssuer(user.issuer)
//     const existingUser = await users.findOne({ issuer: user.issuer })
//     if (!existingUser) {
//         /* Create new user if doesn't exist */
//         return signup(user, userMetadata, done)
//     } else {
//         /* Login user if otherwise */
//         return login(user, done)
//     }
// })

// passport.use(strategy)

// const router = express.Router()
