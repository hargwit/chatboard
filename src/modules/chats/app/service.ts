import { ChatRepository } from '../dao/repository'
import { ChatUseCases } from './use-cases'

// implementation of the ChatUseCases
const chatService = (chatRepository: ChatRepository): ChatUseCases => ({
  getAll: () => chatRepository.getAll(),
})

export { chatService }
