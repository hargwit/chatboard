import { Notes } from './note'
import { People } from '../../people/entities/people'

export type Board = {
  id: string
  name: string
  people: People
  notes: Notes
}
