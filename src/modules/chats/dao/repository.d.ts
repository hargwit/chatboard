import { Chat } from '../entities/chat'
import { Read, Update } from '../../common/crud'

interface ChatRepository extends Read<Chat>, Update<Chat> {}

export default ChatRepository
