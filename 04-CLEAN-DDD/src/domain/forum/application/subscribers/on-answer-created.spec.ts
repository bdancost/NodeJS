import { makeAnswer } from 'test/factories/make-answer.js'
import { OnAnswerCreated } from './on-answer-created.js'
import { InMemoryAnswerAttachmentsRepository } from 'test/repositories/in-memory-answer-attachment-repository.js'
import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository.js'
import {
  SendNotificationUseCase,
  type SendNotificationUseCaseRequest,
  type SendNotificationUseCaseResponse,
} from '@/domain/notification/application/use-case/send-notification.js'
import { InMemoryNotificationsRepository } from 'test/repositories/in-memory-notification-repository.js'
import { makeQuestion } from 'test/factories/make-question.js'
import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository.js'
import type { MockInstance } from 'vitest'
import { waitFor } from 'test/utils/wait-for.js'
import { InMemoryQuestionAttachmentsRepository } from 'test/repositories/in-memory-question-attachments-repository.js'

let inMemoryQuestionAttachmentsRepository: InMemoryQuestionAttachmentsRepository
let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let inMemoryAnswerAttachmentsRepository: InMemoryAnswerAttachmentsRepository
let inMemoryAnswerRepository: InMemoryAnswersRepository
let inMemoryNotificationsRepository: InMemoryNotificationsRepository
let sendNotificationUseCase: SendNotificationUseCase

let sendNotificationExecuteSpy: MockInstance<
  (request: SendNotificationUseCaseRequest) => Promise<SendNotificationUseCaseResponse>
>

describe('On Answer Created', () => {
  beforeEach(() => {
    inMemoryQuestionAttachmentsRepository = new InMemoryQuestionAttachmentsRepository()
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository(inMemoryQuestionAttachmentsRepository)
    inMemoryAnswerAttachmentsRepository = new InMemoryAnswerAttachmentsRepository()
    inMemoryAnswerRepository = new InMemoryAnswersRepository(inMemoryAnswerAttachmentsRepository)
    inMemoryNotificationsRepository = new InMemoryNotificationsRepository()
    sendNotificationUseCase = new SendNotificationUseCase(inMemoryNotificationsRepository)

    sendNotificationExecuteSpy = vi.spyOn(sendNotificationUseCase, 'execute')

    new OnAnswerCreated(inMemoryQuestionsRepository, sendNotificationUseCase)
  })

  it('should send a notification when an answer is created', async () => {
    const question = makeQuestion()
    const answer = makeAnswer({ questionId: question.id })

    inMemoryQuestionsRepository.create(question)
    inMemoryAnswerRepository.create(answer)

    await waitFor(() => {
      expect(sendNotificationExecuteSpy).toHaveBeenCalled()
    })
  })
})
