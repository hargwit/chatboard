/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose'
import { Chat } from '../entities/chat'
import { ChatRepository } from './repository'
import { chatFactory } from '../entities/factories'
import { map } from '../../common/map'

// a data transfer object specific to the mongo implementation, this should NOT be exported
interface chatDTO extends mongoose.Document, Chat {}

/**
 * A mongo implementation of a chat repository
 */
const chatRepository = ({
  chatModel: model,
}: {
  chatModel: mongoose.Model<chatDTO>
}): ChatRepository => ({
  getAll: () => model.find().lean<Chat>().then(map(chatFactory)),
})

export { chatRepository }
