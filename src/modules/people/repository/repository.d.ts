import { Create, Update } from '../../common/crud'
import { Person } from '../domain'

export interface PersonRepository extends Create<Person>, Update<Person> {}
