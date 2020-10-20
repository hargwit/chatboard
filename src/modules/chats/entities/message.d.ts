import { Person } from '../../people/entities/people'

export type Message = {
  uuid: string
  body: string
  sentBy: Person
  sentAt: Date
}

export type Messages = Array<Message>
