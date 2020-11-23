import logger from './logger'
import server from './server'
import router from './router'
import database from './database'

/**
 * @param {import("express").Router} app the express application.
 */
export default async (app) => {
    // Connect to the database
    await database()

    // Configure the express application
    logger(app)
    server(app)

    // Load the router
    router(app)
}
