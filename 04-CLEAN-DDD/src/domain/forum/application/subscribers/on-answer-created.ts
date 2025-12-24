import { DomainEvents } from '@/core/events/domain-events.js'
import type { EventHandler } from '@/core/events/event-handler.js'
import { AnswerCreatedEvent } from '../../enterprise/entities/events/answer-created-events.js'

export class OnAnswerCreated implements EventHandler {
  constructor() {
    this.setupSubscriptions()
  }

  setupSubscriptions(): void {
    DomainEvents.register(this.sendNewAnswerNotifications.bind(this), AnswerCreatedEvent.name)
  }

  private async sendNewAnswerNotifications({ answer }: AnswerCreatedEvent) {
    console.log(`Answer ${answer.id} has been created`)
  }
}
