import { Person } from '../../people/entities/people'

export type Note = {
  id: string
  body: string
  sentBy: Person
  sentAt: Date
}

export type Notes = Array<Note>
