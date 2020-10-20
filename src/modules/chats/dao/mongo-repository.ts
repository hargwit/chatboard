/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose'
import { ChatRepository } from './repository'
import { Chat } from '../entities/chat'
import { chatFactory } from '../entities/factories'
import { doc } from '../../../infra/mongo/result-mapper'
import { map } from '../../../helpers/map'

/**
 * A mongo implementation of a chat repository
 */
const chatRepository = (
  model: mongoose.Model<mongoose.Document>,
): ChatRepository => ({
  getAll: () => model.find().then(map(doc)).then(map<any, Chat>(chatFactory)),
})

export { chatRepository }
