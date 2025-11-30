import { Request, Response } from 'express'
import { AppError } from '@/utils/AppError'
import { authConfig } from '@/configs/auth'
import { prisma } from '@/database/prisma'
import jwt from 'jsonwebtoken'
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

    const { secret, expiresIn } = authConfig.jwt

    const token = jwt.sign({ role: user.role }, secret, {
      subject: user.id,
      expiresIn,
    })

    const { password: _, ...userWithoutPassword } = user

    res.json({ token, user: userWithoutPassword })
  }
}

export { SessionsController }
