import { Chats } from '../entities/chat'

export interface ChatUseCases {
  getAll: () => Promise<Chats>
}
