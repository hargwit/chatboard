import { Create, Update } from '../../common/crud'
import { Person } from '../domain'

/**
 * Person repository for storing and retrieving people.
 */
export type PersonRepository = Create<Person> & Update<Person>
