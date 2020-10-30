import awilix from 'awilix'

import { chatHandler } from '../modules/chats/controller/controller'
import { chatService } from '../modules/chats/app/service'
import { chatRepository } from '../modules/chats/dao/mongo-repository'
import { Chat as chatModel } from '../modules/chats/dao/mongo-model'

export default () => {
  const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY,
  })

  // Register chat dependencies
  container.register({
    chatHandler: awilix.asFunction(chatHandler),
    chatService: awilix.asFunction(chatService),
    chatRepository: awilix.asFunction(chatRepository),
    chatModel: awilix.asValue(chatModel),
  })

  return container
}
