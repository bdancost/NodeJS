import { Request, Response } from 'express'

class DeliveriesController {
  create(req: Request, res: Response) {
    return res.send({ message: 'Create a delivery' })
  }
}

export { DeliveriesController }
