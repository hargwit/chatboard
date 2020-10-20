import { v4 as uuidv4 } from 'uuid'

/**
 *  The chat factory builds and returns a Chat
 *
 * @returns {import('./chat').Chat}
 */
const chatFactory = ({ id = uuidv4(), name, people = [], messages = [] }) => ({
  uuid: id,
  name,
  people,
  messages,
  createdAt: new Date(),
})

export { chatFactory }
