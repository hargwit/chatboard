import { pipe } from 'lodash/fp'
import { createMongoMixin, updateMongoMixin, readMongoMixin } from '../../../common/crud'
import { personFactory } from '../../domain'

/**
 * A mongo implementation of the `PersonRepository`.
 *
 * @param {Object} args
 * @param {import('mongoose').Model<import('../../domain').Person & import('mongoose').Document>} args.model The mongo model for people.
 *
 * @returns {import('../PersonRepository').PersonRepository} The person repository.
 */
export const mongoPersonRepositoryFactory = ({ model }) =>
    pipe(
        createMongoMixin({ model, resultMapper: personFactory }),
        readMongoMixin({ model, resultMapper: personFactory }),
        updateMongoMixin({ model, resultMapper: personFactory })
        // @ts-ignore
    )({})
