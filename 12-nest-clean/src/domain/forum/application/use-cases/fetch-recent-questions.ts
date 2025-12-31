/* eslint-disable no-useless-constructor */

import type { QuestionsRepository } from '../repositories/questions-repository.js'
import { Question } from '../../enterprise/entities/question.js'
import { right } from '@/core/either.js'
import type { Either } from '@/core/either.js'

interface FetchRecentQuestionUseCaseRequest {
  page: number
}

type FetchRecentQuestionUseCaseResponse = Either<
  null,
  {
    questions: Question[]
  }
>

export class FetchRecentQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}
  async execute({
    page,
  }: FetchRecentQuestionUseCaseRequest): Promise<FetchRecentQuestionUseCaseResponse> {
    const questions = await this.questionsRepository.findManyRecent({ page })

    return right({
      questions,
    })
  }
}
