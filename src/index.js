import express from 'express'
import dotenv from 'dotenv'

import loaders from './infrastructure/loaders'

// Load the process variables
dotenv.config()

async function startServer() {
    console.log('Starting chatboard')

    // Build an express app
    const app = express()

    // Server starter
    const listen = () =>
        app.listen(process.env.PORT, () => {
            console.log(`
            ###########################################
                   Server listening on port ${process.env.PORT}
            ###########################################
        `)
        })

    // Load the application and start it on success
    loaders(app)
        .then(listen)
        .catch((error) => console.log('Failed to load application: ', error))
}

// Allons-y!
startServer()
