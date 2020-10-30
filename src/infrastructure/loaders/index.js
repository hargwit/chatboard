import logger from './logger'
import server from './server'
import di from './di'
import router from './router'
import database from './database'

export default async (app) => {
  logger(app)
  await database()
  server(app)
  router(app, di())
}
