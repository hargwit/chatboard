/**
 * @param {import("../app/use-cases").ChatUseCases} chatService contains all of the chat use cases
 */
function chatHandler(chatService) {
  return {
    getAll: (req, res) => {
      return res.send(chatService.getAll())
    },
  }
}

export { chatHandler }
