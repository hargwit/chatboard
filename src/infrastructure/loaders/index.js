import logger from './logger'
import server from './server'
import router from './router'
import session from './session'
import database from './database'

/**
 * Loads all of the applications dependencies.
 *
 * @param {import("express").Application} app the express application.
 */
export default async (app) => {
    // Connect to the database
    await database()

    // Configure the express application
    logger(app)
    server(app)
    session(app)

    // Load the router
    router(app)
}
