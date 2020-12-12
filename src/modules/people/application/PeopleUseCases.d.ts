import { Person } from '../domain'

/**
 * Use cases of the system relating to people on it.
 */
export interface PeopleUseCases {
    /**
     * Registers a new account for the person signing up.
     */
    signUp: (username: string) => Promise<Person>
    /**
     * Gets a person by their id.
     */
    get: (id: string) => Promise<Person>
}
