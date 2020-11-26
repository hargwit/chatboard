/**
 * A functional mixin to provide mongo create functionality.
 *
 * @template R The repository being mixed into.
 * @template T The entity the repository is for.
 *
 * @param {Object} args
 * @param {import('mongoose').Model<T & import('mongoose').Document>} args.model The mongo model.
 * @param {(dto: T & import('mongoose').Document) => T} args.resultMapper A function to map the result from mongo document to `T`.
 *
 * @returns {(repo: R) => R & import('../create').Create<T>} The mixed in repository.
 */
export const createMongoMixin = ({ model, resultMapper }) => (repo) => ({
    ...repo,
    create: (t) => new model(t).save().then(resultMapper),
})
