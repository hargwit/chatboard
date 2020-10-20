import { Chats } from '../entities/chat'

export interface ChatRepository {
  getAll: () => Promise<Chats>
}
