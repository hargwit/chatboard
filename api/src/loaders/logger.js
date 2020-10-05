import logger from 'morgan'

export default (app) => {
  // Add logging middleware to the app
  app.user(logger('dev'))
}
