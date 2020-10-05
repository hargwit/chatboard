import cookieParser from 'cookieParser'
import session from 'express-session'
import passport from 'passport'

export default (app) => {
  // Middleware to parse cookies for the session
  app.use(cookieParser())

  // Middleware to cache sessions
  app.use(
    session({
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 60 * 60 * 1000, // 1 hour
        // secure: true, // Uncomment this line to enforce HTTPS protocol.
        sameSite: true,
      },
    }),
  )

  // Set up passport auth management
  app.use(passport.initialize())
  app.use(passport.session())
}
