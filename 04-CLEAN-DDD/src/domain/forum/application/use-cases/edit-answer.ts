import { Answer } from '../../enterprise/entities/answer.js'
import type { AnswersRepository } from '../repositories/answers-repository.js'
import { ResourceNotFoundError } from './errors/resource-not-found-error.js'
import { NotAllowedError } from './errors/not-allowed-error.js'
import { left, right } from '@/core/either.js'
import type { Either } from '@/core/either.js'

interface EditAnswerUseCaseRequest {
  authorId: string
  answerId: string
  content: string
}

type EditAnswerUseCaseResponse = Either<
  ResourceNotFoundError | NotAllowedError,
  {
    answer: Answer
  }
>

export class EditAnswerUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({ answerId, authorId, content }: EditAnswerUseCaseRequest): Promise<EditAnswerUseCaseResponse> {
    const answer = await this.answersRepository.findById(answerId)

    if (!answer) {
      return left(new ResourceNotFoundError())
    }

    if (authorId !== answer.authorID.toString()) {
      return left(new NotAllowedError())
    }

    answer.content = content

    await this.answersRepository.save(answer)

    return right({
      answer,
    })
  }
}
