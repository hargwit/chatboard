import logger from 'morgan'

export default (app) => {
  // Add logging middleware to the app
  app.use(logger('dev'))
}
