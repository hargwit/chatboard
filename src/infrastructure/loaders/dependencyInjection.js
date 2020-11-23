import awilix from 'awilix'

/**
 * Creates the dependency injection container.
 *
 * @returns {awilix.AwilixContainer} the configured container.
 */
export default () => {
    const container = awilix.createContainer({
        injectionMode: awilix.InjectionMode.PROXY,
    })

    // Register chat dependencies
    container.register({})

    return container
}
