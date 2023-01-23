import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from '../repositories/notification-repository';
import { NotificationNotFound } from "./errors/notification-not-found";
interface UnreadNotificationRequest {
    notificationId: string;
}

type UnreadNotificationResponse = void;

// Utiliza o princípio do solid de ter apenas uma função
@Injectable()
export class UnreadNotification {
    constructor(private notificationRepository: NotificationsRepository) {

    }

    async execute(request: UnreadNotificationRequest): Promise<UnreadNotificationResponse> {
        const { notificationId } = request;

        const notification = await this.notificationRepository.findById(
            notificationId,
        );

        if (!notification) {
            throw new NotificationNotFound();
        }

        notification.unread();

        await this.notificationRepository.save(notification);
    }
}
