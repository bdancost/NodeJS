import type { AnswersRepository } from '../repositories/answers-repository.js'
import { AnswerComment } from '../../enterprise/entities/answer-comment.js'
import type { AnswerCommentsRepository } from '../repositories/answer-comments-repository.js'
import { UniqueEntityID } from '@/core/entities/unique-entity-id.js'

interface CommentOnAnswerUseCaseRequest {
  authorId: string
  answerId: string
  content: string
}

interface CommentOnAnswerUseCaseResponse {
  answerComment: AnswerComment
}

export class CommentOnAnswerUseCase {
  constructor(
    private AnswersRepository: AnswersRepository,
    private AnswerCommentsRepository: AnswerCommentsRepository
  ) {}

  async execute({
    authorId,
    answerId,
    content,
  }: CommentOnAnswerUseCaseRequest): Promise<CommentOnAnswerUseCaseResponse> {
    const Answer = await this.AnswersRepository.findById(answerId)

    if (!Answer) {
      throw new Error('Answer not found.')
    }

    const answerComment = AnswerComment.create({
      authorId: new UniqueEntityID(authorId),
      answerId: new UniqueEntityID(answerId),
      content,
    })

    await this.AnswerCommentsRepository.create(answerComment)

    return {
      answerComment,
    }
  }
}
