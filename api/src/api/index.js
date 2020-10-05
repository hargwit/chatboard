import express from 'express'

import people from './people.js'

export default () => {
  const app = express.Router()

  people(app)

  return app
}
