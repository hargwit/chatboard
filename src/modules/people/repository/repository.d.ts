import { Create, Update } from '../../common/crud'
import { Person } from '../domain'

export type PersonRepository = Create<Person> & Update<Person>
