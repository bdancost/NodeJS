import { Entity } from '../../core/entities/entity.js'
import { UniqueEntityID } from '../../core/entities/unique-entity-id.js'

interface AnswerProps {
  authorId: UniqueEntityID
  questionId: UniqueEntityID
  content: string
  createdAt: Date
  updatedAt?: Date
}

export class Answer extends Entity<AnswerProps> {
  get content() {
    return this.props.content
  }
}
