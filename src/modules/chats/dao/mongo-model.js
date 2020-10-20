import mongoose from 'mongoose'

const { Schema, model } = mongoose

const ChatSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
})

const Chat = model('Chat', ChatSchema)

export { Chat }
