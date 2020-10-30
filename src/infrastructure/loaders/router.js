import configureRouter from '../../api'

export default (app, dependencies) => {
  app.use(process.env.API_ROUTE, configureRouter(dependencies))
}
