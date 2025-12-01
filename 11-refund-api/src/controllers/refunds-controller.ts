import { Request, Response } from 'express'
import { prisma } from '@/database/prisma'
import { AppError } from '@/utils/AppError'
import { z } from 'zod'

const CategoriesEnum = z.enum(['food', 'others', 'services', 'transport', 'accommodation'])

class RefundsController {
  async create(req: Request, res: Response) {
    const bodySchema = z.object({
      name: z.string().trim().min(3, { message: 'Informe o nome da solicitação' }),
      category: CategoriesEnum,
      amount: z.number().positive({ message: 'O valor precisa ser positivo' }),
      filename: z.string(),
    })

    const { name, category, amount, filename } = bodySchema.parse(req.body)

    if (!req.user?.id) {
      throw new AppError('Unauthorized', 401)
    }

    const refund = await prisma.refunds.create({
      data: {
        name,
        category,
        amount,
        filename,
        userID: req.user.id,
      },
    })

    return res.status(201).json(refund)
  }

  async index(req: Request, res: Response) {
    const querySchema = z.object({
      name: z.string().optional().default(''),
    })

    const { name } = querySchema.parse(req.query)

    const refunds = await prisma.refunds.findMany({
      where: {
        user: {
          name: {
            contains: name.trim(),
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        user: true,
      },
    })

    return res.status(200).json(refunds)
  }
}

export { RefundsController }
