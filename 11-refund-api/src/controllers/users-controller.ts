import { Request, Response } from 'express'
import { UserRole } from '@prisma/client'
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

    res.json({
      name,
      email,
      password,
      role,
    })
  }
}

export { UsersController }
