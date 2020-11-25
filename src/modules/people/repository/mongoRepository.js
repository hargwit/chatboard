import { pipe } from 'lodash/fp'
import { createMongoMixin, updateMongoMixin } from '../../common/crud'
import { personFactory } from '../domain'

/**
 * A mongo implementation of the `PersonRepository`.
 *
 * @param {Object} args
 * @param {import('mongoose').Model<import('../domain').Person & import('mongoose').Document>} args.model The mongo model for people.
 *
 * @returns {import('./repository').PersonRepository} The person repository.
 */
export const mongoPersonRepositoryFactory = ({ model }) =>
    pipe(
        (x) => ({ ...x, ...createMongoMixin({ model, resultMapper: personFactory }) }),
        (x) => ({ ...x, ...updateMongoMixin({ model, resultMapper: personFactory }) })
    )({})
