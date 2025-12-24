import { UniqueEntityID } from '@/core/entities/unique-entity-id.js'
import { Answer } from '../answer.js'
import type { DomainEvent } from '@/core/events/domain-event.js'

export class AnswerCreatedEvent implements DomainEvent {
  public ocurredAt: Date
  public answer: Answer

  constructor(answer: Answer) {
    this.ocurredAt = new Date()
    this.answer = answer
  }

  getAggregateId(): UniqueEntityID {
    return this.answer.id
  }
}
