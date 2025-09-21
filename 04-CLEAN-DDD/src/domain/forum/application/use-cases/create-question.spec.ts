import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository.js'
import { CreateQuestionUseCase } from './create-question.js'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: CreateQuestionUseCase

describe('Create Question', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new CreateQuestionUseCase(inMemoryQuestionsRepository)
  })

  it('should be able to create a question', async () => {
    const { question } = await sut.execute({
      authorId: '1',
      title: 'This is a question',
      content: 'This is an answer',
    })

    expect(question.id).toBeTruthy()
    expect(inMemoryQuestionsRepository.items).toHaveLength(1)
  })
})
