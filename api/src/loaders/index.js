import server from './server.js'
import session from './session.js'
import logger from './logger.js'

function load(app) {
  server(app)
  session(app)
  logger(app)
}

export default load
