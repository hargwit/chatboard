import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

function startServer() {
  const app = express()

  app.listen(process.env.PORT, () => {
    console.log(`
            ###########################################
                   Server listening on port ${process.env.PORT}
            ###########################################
        `)
  })
}

startServer()