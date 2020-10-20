/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose'
import { Chat } from '../entities/chat'
import { ChatRepository } from './repository'
import { chatFactory } from '../entities/factories'
import { map } from '../../../helpers/map'

// a data transfer object specific to the mongo implementation, this should NOT be exported
interface chatDTO extends mongoose.Document, Chat {}

/**
 * A mongo implementation of a chat repository
 */
const chatRepository = (model: mongoose.Model<chatDTO>): ChatRepository => ({
  getAll: () => model.find().then(map(chatFactory)),
})

export { chatRepository }
