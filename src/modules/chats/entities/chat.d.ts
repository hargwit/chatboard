import { Messages } from './message'
import { People } from '../../people/entities/people'

export type Chat = {
  id: string
  name: string
  people: People
  messages: Messages
}
