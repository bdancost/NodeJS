import { Request, Response } from 'express'

class UploadsController {
  async create(req: Request, res: Response) {
    res.json({ message: 'ok' })
  }
}

export { UploadsController }
