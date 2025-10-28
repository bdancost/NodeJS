import { Request, Response } from 'express'

import { AppError } from '../utils/AppError'

export class ProductsController {
  index(request: Request, response: Response) {
    const { page, limit } = request.query
    response.send(`Listagem de produtos ${page} e ${limit}`)
  }

  create(request: Request, response: Response) {
    const { name, price } = request.body

    if (!name || !price) {
      throw new AppError('Name and price is required')
    }

    response.status(201).json({
      name,
      price,
      user_id: request.user_id,
    })
  }

  show() {}

  update() {}

  delete() {}
}
