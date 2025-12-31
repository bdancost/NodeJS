/* eslint-disable no-useless-constructor */

import type { QuestionCommentsRepository } from '../repositories/question-comments-repository.js'
import { NotAllowedError } from '../../../../core/errors/errors/not-allowed-error.js'
import { ResourceNotFoundError } from '../../../../core/errors/errors/resource-not-found-error.js'
import { left, right } from '@/core/either.js'
import type { Either } from '@/core/either.js'

interface DeleteQuestionCommentUseCaseRequest {
  authorId: string
  questionCommentId: string
}

type DeleteQuestionCommentUseCaseResponse = Either<
  ResourceNotFoundError | NotAllowedError,
  null
>

export class DeleteQuestionCommentUseCase {
  constructor(private questionCommentsRepository: QuestionCommentsRepository) {}

  async execute({
    authorId,
    questionCommentId,
  }: DeleteQuestionCommentUseCaseRequest): Promise<DeleteQuestionCommentUseCaseResponse> {
    const questionComment =
      await this.questionCommentsRepository.findById(questionCommentId)

    if (!questionComment) {
      return left(new ResourceNotFoundError())
    }

    if (questionComment.authorID.toString() !== authorId) {
      return left(new NotAllowedError())
    }
    await this.questionCommentsRepository.delete(questionComment)

    return right(null)
  }
}
