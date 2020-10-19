import express from 'express'
import dotenv from 'dotenv'

import loaders from './loaders/index.js'

dotenv.config()

function startServer() {
  const app = express()

  loaders(app)

  app.listen(process.env.PORT, () => {
    console.log(`
            ###########################################
                   Server listening on port ${process.env.PORT}
            ###########################################
        `)
  })
}

startServer()
