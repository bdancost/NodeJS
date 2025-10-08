import { left, right } from '@/core/either.js'
import type { Either } from '@/core/either.js'
import type { AnswerCommentsRepository } from '../repositories/answer-comments-repository.js'

interface DeleteAnswerCommentUseCaseRequest {
  authorId: string
  answerCommentId: string
}

type DeleteAnswerCommentUseCaseResponse = Either<string, {}>

export class DeleteAnswerCommentUseCase {
  constructor(private answerCommentsRepository: AnswerCommentsRepository) {}

  async execute({
    authorId,
    answerCommentId,
  }: DeleteAnswerCommentUseCaseRequest): Promise<DeleteAnswerCommentUseCaseResponse> {
    const answerComment = await this.answerCommentsRepository.findById(answerCommentId)

    if (!answerComment) {
      return left('Answer comment not found.')
    }

    if (answerComment.authorID.toString() !== authorId) {
      return left('Not allowed.')
    }
    await this.answerCommentsRepository.delete(answerComment)

    return right({})
  }
}
