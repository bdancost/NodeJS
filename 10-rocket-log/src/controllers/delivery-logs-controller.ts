import { Request, Response } from 'express'

class DeliveryLogsController {
  async create(req: Request, res: Response) {
    return res.status(201).json({ message: 'Delivery log created' })
  }
}

export { DeliveryLogsController }
