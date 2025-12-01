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
      page: z.coerce.number().optional().default(1),
      perpage: z.coerce.number().optional().default(10),
    })

    const { name, page, perpage } = querySchema.parse(req.query)

    const skip = (page - 1) * perpage

    const refunds = await prisma.refunds.findMany({
      skip,
      take: perpage,
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

    // Obter o total de registros para calcular o número de páginas
    const totalRecords = await prisma.refunds.count({
      where: {
        user: {
          name: {
            contains: name.trim(),
          },
        },
      },
    })
    const totalPages = Math.ceil(totalRecords / perpage)

    return res.status(200).json({
      refunds,
      pagination: {
        page,
        perpage,
        totalRecords,
        totalPages: totalPages > 0 ? totalPages : 1,
      },
    })
  }
}

export { RefundsController }
