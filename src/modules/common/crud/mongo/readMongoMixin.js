import { map } from 'lodash/fp'

/**
 * A functional mixin to provide mongo read functionality.
 * Templated by type `T`.
 *
 * @template T The entity the repository is for.
 * @template R The repository being mixed into.
 *
 * @param {Object} args
 * @param {import('mongoose').Model<T & import('mongoose').Document>} args.model The mongo model.
 * @param {(dto: T & import('mongoose').Document) => T} args.resultMapper A function to map the result from mongo document to `T`.
 *
 * @returns {(repo: R) => R & import('../Read').Read<T>} A function to create the mixed in repository.
 */
export const readMongoMixin = ({ model, resultMapper }) => (repo) => ({
    ...repo,
    get: (id) => model.findById(id).then(resultMapper),
    getAll: () => model.find().then(map(resultMapper)),
})
