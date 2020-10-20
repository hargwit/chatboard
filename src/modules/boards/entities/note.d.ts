import { Person } from '../../people/entities/people'

export type Note = {
  uuid: string
  body: string
  sentBy: Person
  sentAt: Date
}

export type Notes = Array<Note>
