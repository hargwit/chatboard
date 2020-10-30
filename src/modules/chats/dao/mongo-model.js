import { Schema, model } from 'mongoose'

const ChatSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
})

const Chat = model('Chat', ChatSchema)

export { Chat }
