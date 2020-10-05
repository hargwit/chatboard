import Logger from './logger.js'
import server from './server.js'

function load(app) {
  Logger.info('loading server')
  server(app)
}

export default load
