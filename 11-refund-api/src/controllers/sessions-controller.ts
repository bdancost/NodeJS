import { Request, Response } from 'express'

class SessionsController {
  async create(req: Request, res: Response) {
    const { email, password } = req.body

    res.json({ email, password })
  }
}

export { SessionsController }
