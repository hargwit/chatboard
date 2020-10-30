import express from 'express'

import chatsAPI from './chats.js'

/**
 * Configures the router for the root api.
 *
 * @param {import('awilix').AwilixContainer} dependencyContainer the dependency injection container.
 *
 * @returns {express.Router} the configured router.
 */
function configure(dependencyContainer) {
  const router = express.Router()

  router.get('/', (req, res) => {
    res.send('Hello chatboard!')
  })

  // Chat sub api
  router.use(
    '/chats',
    chatsAPI({ chatController: dependencyContainer.resolve('chatController') }),
  )

  return router
}

export default configure
