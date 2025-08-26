import { prisma } from '@/lib/prisma.js'
import type { Prisma } from '@prisma/client'
import type { User } from '@prisma/client'

import type { UsersRepository } from '@/repositories/users-repository.js'

export class PrismaUsersRepository implements UsersRepository {
  findById(_id: string): Promise<User | null> {
    throw new Error('Method not implemented.')
  }
  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    return user
  }

  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data,
    })

    return user
  }
}
