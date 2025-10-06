import { QuestionComment } from '../../enterprise/entities/question-comment.js'
import type { QuestionCommentsRepository } from '../repositories/question-comments-repository.js'

interface FetchQuestionCommentsRequest {
  questionId: string
  page: number
}

interface FetchQuestionCommentsResponse {
  questionComments: QuestionComment[]
}

export class FetchQuestionAnswersUseCase {
  constructor(private questionCommentsRepository: QuestionCommentsRepository) {}
  async execute({ questionId, page }: FetchQuestionCommentsRequest): Promise<FetchQuestionCommentsResponse> {
    const questionComments = await this.questionCommentsRepository.findManyByQuestionId(questionId, { page })

    return {
      questionComments,
    }
  }
}
