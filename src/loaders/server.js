import express from 'express'

export default (app) => {
  app.set('trust proxy', 1)
  app.set('view engine', 'ejs')

  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
}
