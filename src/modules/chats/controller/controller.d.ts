import express from 'express'

interface ChatController {
  getAll: (req: express.Request, res: express.Response) => void
}

export { ChatController }
