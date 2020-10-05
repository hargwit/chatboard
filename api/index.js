import express from 'express'
import dotenv from 'dotenv'

import loaders from './src/loaders/index.js'

dotenv.config()

function startServer() {
  const app = express()

  loaders(app)

  app.listen(3001, () => {
    console.log(`
            ###########################################
                   Server listening on port 3001
            ###########################################
        `)
  })
}

startServer()
