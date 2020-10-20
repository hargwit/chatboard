/**
 *  The chat factory builds and returns a Chat
 *
 * @returns {import('./chat').Chat}
 */
const chatFactory = ({ name, people = [], messages = [] }) => ({
  name,
  people,
  messages,
  createdAt: new Date(),
})

export { chatFactory }
