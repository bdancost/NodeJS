import { DomainEvents } from '@/core/events/domain-events'
import { EventHandler } from '@/core/events/event-handler'
import { AnswerCreatedEvent } from '../../enterprise/events/answer-created-events'
import { QuestionsRepository } from '../repositories/questions-repository'
import { SendNotificationUseCase } from '@/domain/notification/application/use-case/send-notification'

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
        recipientId: question.authorId.toString(),
        title: `Nova resposta em "${question.title.substring(0, 40).concat('...')}"`,
        content: answer.excerpt.toString(),
      })
    }
  }
}
