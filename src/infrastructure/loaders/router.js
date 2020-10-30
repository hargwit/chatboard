import configureRouter from '../api/index.js'

export default (app, dependencies) => {
  app.use(process.env.API_ROUTE, configureRouter(dependencies))
}
