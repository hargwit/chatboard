import awilix from 'awilix'

import { chatHandler } from '../modules/chats/controller'
import { chatService } from '../modules/chats/service'

export default () => {
  const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY,
  })

  container.register({
    chatsHandler: awilix.asFunction(chatHandler),
    chatsService: awilix.asFunction(chatService),
  })

  return container
}
