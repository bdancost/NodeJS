import type { QuestionsRepository } from '../repositories/questions-repository.js'
import { Question } from '../../enterprise/entities/question.js'
import { ResourceNotFoundError } from './errors/resource-not-found-error.js'
import type { Either } from '@/core/either.js'
import { left, right } from '@/core/either.js'

interface GetQuestionBySlugUseCaseRequest {
  slug: string
}

type GetQuestionBySlugUseCaseResponse = Either<
  ResourceNotFoundError,
  {
    question: Question
  }
>

export class GetQuestionBySlugUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}
  async execute({ slug }: GetQuestionBySlugUseCaseRequest): Promise<GetQuestionBySlugUseCaseResponse> {
    const question = await this.questionsRepository.findBySlug(slug)

    if (!question) {
      return left(new ResourceNotFoundError())
    }

    return right({
      question,
    })
  }
}
