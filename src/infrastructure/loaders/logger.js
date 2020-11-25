import logger from 'morgan'

/**
 * Loads the API logger.
 *
 * @param {import("express").Application} app the express application.
 */
export default (app) => {
    app.use(logger('dev'))
}
