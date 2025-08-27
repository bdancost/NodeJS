import type { Prisma, CheckIn } from '@prisma/client'
import { randomUUID } from 'node:crypto'
import type { CheckInsRepository } from '@/repositories/check-ins-repository.js'

export class InMemoryCheckInsRepository implements CheckInsRepository {
  public items: CheckIn[] = []

  async create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn> {
    const checkIn: CheckIn = {
      id: randomUUID(),
      user_id: data.user_id,
      gym_id: data.gym_id,
      validate_at: new Date(),
      created_at: new Date(),
    }

    this.items.push(checkIn)

    return checkIn
  }
}
