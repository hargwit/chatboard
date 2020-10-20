import { Messages } from './message'
import { People } from '../../people/entities/people'

export type Chat = {
  uuid: string
  name: string
  people: People
  messages: Messages
}

export type Chats = Array<Chat>
