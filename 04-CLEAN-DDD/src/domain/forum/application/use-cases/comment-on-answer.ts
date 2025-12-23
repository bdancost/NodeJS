import type { AnswersRepository } from '../repositories/answers-repository.js'
import { AnswerComment } from '../../enterprise/entities/answer-comment.js'
import type { AnswerCommentsRepository } from '../repositories/answer-comments-repository.js'
import { UniqueEntityID } from '@/core/entities/unique-entity-id.js'
import { ResourceNotFoundError } from '../../../../core/errors/errors/resource-not-found-error.js'
import type { Either } from '@/core/either.js'
import { left, right } from '@/core/either.js'

interface CommentOnAnswerUseCaseRequest {
  authorId: string
  answerId: string
  content: string
}

type CommentOnAnswerUseCaseResponse = Either<
  ResourceNotFoundError,
  {
    answerComment: AnswerComment
  }
>

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
      return left(new ResourceNotFoundError())
    }

    const answerComment = AnswerComment.create({
      authorId: new UniqueEntityID(authorId),
      answerId: new UniqueEntityID(answerId),
      content,
    })

    await this.AnswerCommentsRepository.create(answerComment)

    return right({
      answerComment,
    })
  }
}
