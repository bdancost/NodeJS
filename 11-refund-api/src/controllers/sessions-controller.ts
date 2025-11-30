import { Request, Response } from 'express'
import { prisma } from '@/database/prisma'
import { AppError } from '@/utils/AppError'
import { compare } from 'bcrypt'
import { z } from 'zod'

class SessionsController {
  async create(req: Request, res: Response) {
    const bodySchema = z.object({
      email: z.string().trim().email({ message: 'E-mail inválido' }).toLowerCase(),
      password: z.string(),
    })

    const { email, password } = bodySchema.parse(req.body)

    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    })

    if (!user) {
      throw new AppError('E-mail ou senha inválido', 401)
    }

    const passwordMatched = await compare(password, user.password)

    if (!passwordMatched) {
      throw new AppError('E-mail ou senha inválido', 401)
    }

    res.json({ email, password })
  }
}

export { SessionsController }
