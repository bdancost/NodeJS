import { AppError } from '@/utils/AppError'
import { Request, Response } from 'express'
import { prisma } from '@/database/prisma'
import { hash } from 'bcrypt'
import { z } from 'zod'

class UsersController {
  async create(req: Request, res: Response) {
    const bodySchema = z.object({
      name: z.string().trim().min(3),
      email: z.string().email(),
      password: z.string().min(6),
    })

    const { name, email, password } = bodySchema.parse(req.body)

    const userWithSameEmail = await prisma.user.findFirst({
      where: { email },
    })

    if (userWithSameEmail) {
      throw new AppError('User with same email already exists')
    }

    const hashedPassword = await hash(password, 10)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })

    const { password: _, ...userWithoutPassword } = user

    return res.json(userWithoutPassword)
  }
}

export { UsersController }
