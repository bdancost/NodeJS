import { Request, Response } from 'express'
import { AppError } from '../utils/app-error'
import { z } from 'zod'

export class ProductsController {
  index(request: Request, response: Response) {
    const { page, limit } = request.query
    response.send(`Listagem de produtos ${page} e ${limit}`)
  }

  create(request: Request, response: Response) {
    const bodySchema = z.object({
      name: z.string(),
      price: z.number(),
    })

    const { name, price } = bodySchema.parse(request.body)

    // if (!name) {
    //   throw new AppError('Name is required')
    // }

    // if (name.trim().length < 6) {
    //   throw new AppError('Name must be at least 3 characters')
    // }

    // if (!price) {
    //   throw new AppError('Price is required')
    // }

    // if (price < 0) {
    //   throw new AppError('Price must be greater than 0')
    // }

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
