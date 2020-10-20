import express from 'express'
import dotenv from 'dotenv'

import loaders from './loaders/index.js'

// Load the process variables
dotenv.config()

function startServer() {
  // Build an express app
  const app = express()

  // Load the application
  loaders(app)

  // Start the server
  app.listen(process.env.PORT, () => {
    console.log(`
            ###########################################
                   Server listening on port ${process.env.PORT}
            ###########################################
        `)
  })
}

// lets go!
startServer()
