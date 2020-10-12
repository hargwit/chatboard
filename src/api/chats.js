import express from 'express'

function configure(chatHandler) {
  const router = express.Router()

  router.get('/', chatHandler.getAll)

  return router
}

export default configure
