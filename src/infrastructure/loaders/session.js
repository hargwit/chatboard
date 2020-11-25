import cookieParser from 'cookie-parser'
import session from 'express-session'

import passport from 'passport'

/**
 * Loads the session middleware.
 *
 * @param {import("express").Application} app the express application.
 */
export default (app) => {
    app.use(cookieParser())

    app.use(
        session({
            secret: process.env.API_SECRET,
            resave: false,
            saveUninitialized: true,
            cookie: {
                maxAge: 60 * 60 * 1000, // 1 hour
                // secure: true, // Uncomment this line to enforce HTTPS protocol.
                sameSite: true,
            },
        })
    )

    app.use(passport.initialize())
    app.use(passport.session())
}
