import { Request, Response } from 'express'
import { UserRole } from '@prisma/client'
import { prisma } from '@/database/prisma'
import { AppError } from '@/utils/AppError'
import { hash } from 'bcrypt'
import { z } from 'zod'

class UsersController {
  async create(req: Request, res: Response) {
    const bodySchema = z.object({
      name: z.string().trim().min(3, { message: 'Name must have at least 3 characters' }),
      email: z.string().trim().email({ message: 'Invalid email' }).toLowerCase(),
      password: z.string().trim().min(6, { message: 'Password must have at least 6 characters' }),
      role: z.enum([UserRole.employee, UserRole.manager]).default(UserRole.employee),
    })

    const { name, email, password, role } = bodySchema.parse(req.body)

    const userWithSameEmail = await prisma.user.findFirst({
      where: {
        email,
      },
    })

    if (userWithSameEmail) {
      throw new AppError('Já existe um usuário cadastrado com esse e-mail')
    }

    const hashedPassword = await hash(password, 10)

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    })

    res.status(201).json()
  }
}

export { UsersController }
