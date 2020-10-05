import express from 'express'

function startServer() {
  const app = express()

  app.listen(3001, () => {
    console.log(`
            ###############################################
                   Server listening on port 3001
            ###############################################
        `)
  })
}

startServer()
