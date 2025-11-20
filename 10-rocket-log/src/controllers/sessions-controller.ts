import { Request, Response } from 'express'

class SessionsController {
  async create(req: Request, res: Response) {
    return res.status(200).json({ message: 'Session created' })
  }
}

export { SessionsController }
