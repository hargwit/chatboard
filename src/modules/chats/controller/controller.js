function chatsHandler({ chatsService }) {
  return {
    getAll: (req, res) => {
      return res.send(chatsService.getAll())
    },
  }
}

export default chatsHandler
