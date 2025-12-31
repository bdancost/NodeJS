/* eslint-disable no-useless-constructor */

import { AnswerComment } from '../../enterprise/entities/answer-comment.js'
import type { AnswerCommentsRepository } from '../repositories/answer-comments-repository.js'
import { right } from '@/core/either.js'
import type { Either } from '@/core/either.js'

interface FetchAnswerCommentsRequest {
  answerId: string
  page: number
}

type FetchAnswerCommentsResponse = Either<
  null,
  {
    answerComments: AnswerComment[]
  }
>

export class FetchAnswerCommentsUseCase {
  constructor(private answerCommentsRepository: AnswerCommentsRepository) {}
  async execute({
    answerId,
    page,
  }: FetchAnswerCommentsRequest): Promise<FetchAnswerCommentsResponse> {
    const answerComments =
      await this.answerCommentsRepository.findManyByAnswerId(answerId, { page })

    return right({
      answerComments,
    })
  }
}
