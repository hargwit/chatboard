import express from 'express'

import chatsAPI from './chats.js'

function configure(dependencyContainer) {
  const router = express.Router()

  router.get('/', (req, res) => {
    res.send('<p>some html</p>')
  })

  router.use('/chats', chatsAPI(dependencyContainer.resolve('chatsHandler')))

  return router
}

export default configure
