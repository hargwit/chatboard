import configureRouter from '../../api'

/**
 * Loads the API routers.
 *
 * @param {import("express").Application} app the express application.
 */
export default (app) => {
    app.use(process.env.API_ROUTE, configureRouter())
}
