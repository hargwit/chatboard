import { Notes } from './note'
import { People } from '../../people/entities/people'

export type Board = {
  uuid: string
  name: string
  people: People
  notes: Notes
}
