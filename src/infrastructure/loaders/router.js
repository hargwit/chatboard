import configureRouter from '../../api'

export default (app) => {
    app.use(process.env.API_ROUTE, configureRouter())
}
