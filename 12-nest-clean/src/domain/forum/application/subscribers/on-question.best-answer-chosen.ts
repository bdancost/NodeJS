import { DomainEvents } from '@/core/events/domain-events.js'
import type { EventHandler } from '@/core/events/event-handler.js'
import type { SendNotificationUseCase } from '@/domain/notification/application/use-case/send-notification.js'
import type { AnswersRepository } from '../repositories/answers-repository.js'
import { QuestionBestAnswerChosenEvent } from '../../enterprise/events/question-best-answer-chosen-event.js'

export class OnQuestionBestAnswerChosen implements EventHandler {
  constructor(
    private answerRepository: AnswersRepository,
    private sendNotification: SendNotificationUseCase,
  ) {
    this.setupSubscriptions()
  }

  setupSubscriptions(): void {
    DomainEvents.register(
      this.sendQuestionBestAnswerNotification.bind(this),
      QuestionBestAnswerChosenEvent.name,
    )
  }

  private async sendQuestionBestAnswerNotification({
    question,
    bestAnswerId,
  }: QuestionBestAnswerChosenEvent) {
    const answer = await this.answerRepository.findById(bestAnswerId.toString())

    if (answer) {
      await this.sendNotification.execute({
        recipientId: answer.authorID.toString(),
        title: `Sua resposta foi escolhida!`,
        content: `A resposta que você enviou em "${question.title.substring(0, 20).concat('...')}" foi escolhida pelo autor!`,
      })
    }
  }
}
