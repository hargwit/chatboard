import express from 'express'

/**
 * Loads the server dependencies.
 *
 * @param {import("express").Application} app the express application.
 */
export default (app) => {
    app.set('trust proxy', 1)
    app.set('view engine', 'ejs')

    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
}
