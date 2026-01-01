/* eslint-disable no-useless-constructor */

import { QuestionsRepository } from '../repositories/questions-repository'
import type { QuestionsRepository as QuestionsRepositoryType } from '../repositories/questions-repository'
import { Question } from '../../enterprise/entities/question'
import { right } from '@/core/either'
import type { Either } from '@/core/either'
import { Injectable, Inject } from '@nestjs/common'

interface FetchRecentQuestionUseCaseRequest {
  page: number
}

type FetchRecentQuestionUseCaseResponse = Either<
  null,
  {
    questions: Question[]
  }
>

@Injectable()
export class FetchRecentQuestionUseCase {
  constructor(
    @Inject(QuestionsRepository)
    private readonly questionsRepository: QuestionsRepositoryType,
  ) {}

  async execute({
    page,
  }: FetchRecentQuestionUseCaseRequest): Promise<FetchRecentQuestionUseCaseResponse> {
    const questions = await this.questionsRepository.findManyRecent({ page })

    return right({
      questions,
    })
  }
}
