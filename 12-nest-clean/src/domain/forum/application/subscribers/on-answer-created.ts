import { DomainEvents } from '@/core/events/domain-events.js'
import type { EventHandler } from '@/core/events/event-handler.js'
import { AnswerCreatedEvent } from '../../enterprise/events/answer-created-events.js'
import type { QuestionsRepository } from '../repositories/questions-repository.js'
import type { SendNotificationUseCase } from '@/domain/notification/application/use-case/send-notification.js'

export class OnAnswerCreated implements EventHandler {
  constructor(
    private questionsRepository: QuestionsRepository,
    private sendNotifications: SendNotificationUseCase,
  ) {
    this.setupSubscriptions()
  }

  setupSubscriptions(): void {
    DomainEvents.register(
      this.sendNewAnswerNotifications.bind(this),
      AnswerCreatedEvent.name,
    )
  }

  private async sendNewAnswerNotifications({ answer }: AnswerCreatedEvent) {
    const question = await this.questionsRepository.findById(
      answer.questionId.toString(),
    )

    if (question) {
      await this.sendNotifications.execute({
        recipientId: question.authorID.toString(),
        title: `Nova resposta em "${question.title.substring(0, 40).concat('...')}"`,
        content: answer.excerpt.toString(),
      })
    }
  }
}
