import type { CheckInsRepository } from '@/repositories/check-ins-repository.js'
import type { CheckIn } from '@prisma/client'

interface FetchUserCheckInsHistoryUseCaseRequest {
  userId: string
  page: number
}

interface FetchUserCheckInsHistoryUseCaseResponse {
  checkIn: CheckIn[]
}

export class FetchUserCheckInsHistoryUseCase {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    userId,
    page,
  }: FetchUserCheckInsHistoryUseCaseRequest): Promise<FetchUserCheckInsHistoryUseCaseResponse> {
    const checkIn = await this.checkInsRepository.findManyByUserId(userId, page)

    return {
      checkIn,
    }
  }
}
