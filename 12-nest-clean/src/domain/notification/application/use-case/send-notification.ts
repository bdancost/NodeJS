/* eslint-disable no-useless-constructor */

import { UniqueEntityID } from '@/core/entities/unique-entity-id.js'
import { right } from '@/core/either.js'
import type { Either } from '@/core/either.js'
import { Notification } from '../../enterprise/entities/notification.js'
import type { NotificationsRepository } from '../repositories/notifications-repository.js'

export interface SendNotificationUseCaseRequest {
  recipientId: string
  title: string
  content: string
}

export type SendNotificationUseCaseResponse = Either<
  null,
  {
    notification: Notification
  }
>

export class SendNotificationUseCase {
  constructor(private notificationsRepository: NotificationsRepository) {}
  async execute({
    recipientId,
    title,
    content,
  }: SendNotificationUseCaseRequest): Promise<SendNotificationUseCaseResponse> {
    const notification = Notification.create({
      recipientId: new UniqueEntityID(recipientId),
      title,
      content,
    })

    await this.notificationsRepository.create(notification)

    return right({
      notification,
    })
  }
}
