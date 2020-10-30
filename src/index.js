import express from 'express'
import dotenv from 'dotenv'

import loaders from './infrastructure/loaders'

// Load the process variables
dotenv.config()

async function startServer() {
  // Build an express app
  const app = express()

  // Load the application
  await loaders(app)

  // Start the server
  app.listen(process.env.PORT, () => {
    console.log(`
            ###########################################
                   Server listening on port ${process.env.PORT}
            ###########################################
        `)
  })
}

// Allons-y!
await startServer()
