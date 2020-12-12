import { personFactory } from '../domain'

/**
 *  A factory to build an implementation of the PeopleUseCases.
 *
 *  @param {Object} dependencies The dependencies of the implementation.
 *  @param {import('../repository').PersonRepository} dependencies.personRepository A people repository.
 *
 * @returns {import('./PeopleUseCases').PeopleUseCases} The implementation of the PeopleUseCases.
 */
export const peopleServiceFactory = ({ personRepository }) => ({
    signUp: (username) => personRepository.create(personFactory({ username })),

    get: (id) => personRepository.get(id),
})
