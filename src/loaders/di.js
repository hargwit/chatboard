import awilix from 'awilix'

import chatsHandler from '../handlers/chats.js'
import chatsService from '../modules/chats/service.js'

export default () => {
  const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY,
  })

  container.register({
    chatsHandler: awilix.asFunction(chatsHandler),
    chatsService: awilix.asFunction(chatsService),
  })

  return container
}
