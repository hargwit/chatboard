import express from 'express'

/**
 * Configures the router for the root api.
 *
 * @returns {express.Router} the configured router.
 */
function configure() {
    const router = express.Router()

    router.get('/', (req, res) => {
        res.send('Hello chatboard!')
    })

    return router
}

export default configure
