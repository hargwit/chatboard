/**
 * Builds a person.
 *
 * @param {Partial<import('./people').Person>} personProps The properties of the person.
 *
 * @returns {import('./people').Person} The person.
 */
export const personFactory = ({ id = '', username = '' }) => ({ id, username })
