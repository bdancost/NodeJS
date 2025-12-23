import type { QuestionsRepository } from '../repositories/questions-repository.js'
import { ResourceNotFoundError } from '../../../../core/errors/errors/resource-not-found-error.js'
import { NotAllowedError } from '../../../../core/errors/errors/not-allowed-error.js'
import { left, right } from '@/core/either.js'
import type { Either } from '@/core/either.js'
import type { QuestionAttachmentsRepository } from '../repositories/question-attachments-repository.js'

interface DeleteQuestionUseCaseRequest {
  authorId: string
  questionId: string
}

type DeleteQuestionUseCaseResponse = Either<ResourceNotFoundError | NotAllowedError, {}>

export class DeleteQuestionUseCase {
  constructor(
    private questionsRepository: QuestionsRepository,
    private questionAttachmentsRepository: QuestionAttachmentsRepository
  ) {}
  async execute({ questionId, authorId }: DeleteQuestionUseCaseRequest): Promise<DeleteQuestionUseCaseResponse> {
    const question = await this.questionsRepository.findById(questionId)

    if (!question) {
      return left(new ResourceNotFoundError())
    }

    if (authorId !== question.authorID.toString()) {
      return left(new NotAllowedError())
    }

    await this.questionsRepository.delete(question)

    return right({})
  }
}
