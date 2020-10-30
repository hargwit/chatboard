import express from 'express'

/**
 *  Configures the router for the contract api.
 *
 * @param {Object} args The depedencies required to build the api.
 * @param {import('../modules/chats/controller').ChatController} args.chatController the chat controller.
 *
 * @returns {express.Router} the configured contracts router.
 */
function configure({ chatController }) {
  const router = express.Router()

  router.get('/', chatController.getAll)

  return router
}

export default configure
