/**
 * Produces a ChatController.
 *
 * @param {Object} args
 * @param {import("../app/use-cases").ChatUseCases} args.chatService contains all of the chat use cases
 *
 * @returns {import("./controller").ChatController} the chat controller.
 */
function chatController({ chatService }) {
  return {
    getAll: (req, res) => {
      const chats = chatService.getAll()

      return res.send({ chats })
    },
  }
}

export { chatController }
