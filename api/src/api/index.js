import express from 'express'

import auth from './auth.js'

export default () => {
  const app = express.Router()

  app.get('/', (req, res) => {
    res.status(200).json({ foo: 'bar' }).end()
  })

  auth(app)

  app.get('/foo', (req, res) => {
    res.status(200).json({ bar: 'foo' }).end()
  })

  return app
}
