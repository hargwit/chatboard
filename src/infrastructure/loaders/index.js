import logger from './logger'
import server from './server'
import dependencyInjection from './dependencyInjection'
import router from './router'
import database from './database'

/**
 * @param {import("express").Router} app the express application.
 */
export default async (app) => {
  // Connect to the database
  await database()

  // Build the dependencies
  const dependencies = dependencyInjection()

  // Configure the express application
  logger(app)
  server(app)

  // Load the router
  router(app, dependencies)
}
