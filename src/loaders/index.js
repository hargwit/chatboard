import logger from './logger.js'
import server from './server.js'
import di from './di.js'
import router from './router.js'

export default (app) => {
  logger(app)
  server(app)
  router(app, di())
}
