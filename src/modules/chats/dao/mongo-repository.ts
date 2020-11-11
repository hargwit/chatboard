/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose'
import pipe from 'lodash/fp/flow'
import { Chat } from '../entities/chat'
import ChatRepository from './repository'
import { chatFactory } from '../entities/factories'
import { mongoReadMixin, mongoUpdateMixin } from '../../common/crud/mongo'

type PartialRepo = unknown

/**
 * A mongo implementation of a chat repository
 */
const chatRepository = ({
  chatModel: model,
}: {
  chatModel: mongoose.Model<Chat & mongoose.Document>
}): ChatRepository =>
  pipe(
    mongoReadMixin<PartialRepo, Chat>({
      model,
      resultMapper: chatFactory,
    }),
    mongoUpdateMixin({
      model,
    }),
  )({})

export { chatRepository }
