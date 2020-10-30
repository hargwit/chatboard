import awilix from 'awilix'

import { chatController } from '../../modules/chats/controller'
import { chatService } from '../../modules/chats/app/service'
import { chatRepository } from '../../modules/chats/dao/mongo-repository'
import { Chat as chatModel } from '../../modules/chats/dao/mongo-model'

/**
 * Creates the dependency injection container.
 *
 * @returns {awilix.AwilixContainer} the configured container.
 */
export default () => {
  const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY,
  })

  // Register chat dependencies
  container.register({
    chatController: awilix.asFunction(chatController),
    chatService: awilix.asFunction(chatService),
    chatRepository: awilix.asFunction(chatRepository),
    chatModel: awilix.asValue(chatModel),
  })

  return container
}
