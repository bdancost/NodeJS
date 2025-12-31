/* eslint-disable no-useless-constructor */

import { QuestionComment } from '../../enterprise/entities/question-comment.js'
import type { QuestionCommentsRepository } from '../repositories/question-comments-repository.js'
import { right } from '@/core/either.js'
import type { Either } from '@/core/either.js'

interface FetchQuestionCommentsRequest {
  questionId: string
  page: number
}

type FetchQuestionCommentsResponse = Either<
  null,
  {
    questionComments: QuestionComment[]
  }
>

export class FetchQuestionCommentsUseCase {
  constructor(private questionCommentsRepository: QuestionCommentsRepository) {}
  async execute({
    questionId,
    page,
  }: FetchQuestionCommentsRequest): Promise<FetchQuestionCommentsResponse> {
    const questionComments =
      await this.questionCommentsRepository.findManyByQuestionId(questionId, {
        page,
      })

    return right({
      questionComments,
    })
  }
}
