import router from '../api/index.js'

export default (app) => {
  app.use(process.env.API_ROUTE, router)
}
