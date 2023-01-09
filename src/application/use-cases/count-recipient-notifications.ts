import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from '../repositories/notification-repository';
import { NotificationNotFound } from "./errors/notification-not-found";
interface CountRecipientNotificationsRequest {
    recipientId: string;
}

interface CountRecipientNotificationsResponse {
    count: number
}

// Utiliza o princípio do solid de ter apenas uma função
@Injectable()
export class CountRecipientNotifications {
    constructor(private notificationRepository: NotificationsRepository) {

    }

    async execute(
        request: CountRecipientNotificationsRequest,
    ): Promise<CountRecipientNotificationsResponse> {
        const { recipientId } = request;

        const count = await this.notificationRepository.countManyByRecipientId(recipientId,);

        return {
            count,
        };
    }
}