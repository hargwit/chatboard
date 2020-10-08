import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('<p>some html</p>')
})

export default router
