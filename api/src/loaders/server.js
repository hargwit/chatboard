import express from 'express'
import cors from 'cors'

import routes from '../api/index.js'

export default (app) => {
  /*
   * Health Check endpoints
   *
   * Used to ensure the application is healthy.
   */
  app.get('/status', (req, res) => {
    res.status(200).end()
  })
  app.head('/status', (req, res) => {
    res.status(200).end()
  })

  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors())

  // Middleware that transforms the raw string of req.body into json
  app.use(express.json())

  // Add auth middleware, only /login is not checked
  app.use(async (req, res, next) => {
    if (req.url.includes('/login') || req.isAuthenticated()) {
      return next()
    } else {
      return res.status(401).end(`User is not logged in.`)
    }
  })

  // Set up routes
  app.use('/', routes())

  /// catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found')
    err['status'] = 404
    next(err)
  })

  /// error handlers
  app.use((err, _, res) => {
    res.status(err.status || 500)
    res.json({
      errors: {
        message: err.message,
      },
    })
  })
}
