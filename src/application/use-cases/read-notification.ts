import { Injectable } from "@nestjs/common";
import { Content } from "../entities/content";
import { Notification } from "../entities/notification";
import { NotificationsRepository } from '../repositories/notification-repository';
import { NotificationNotFound } from "./errors/notification-not-found";
interface ReadNotificationRequest {
    notificationId: string;
}

type ReadNotificationResponse = void;

// Utiliza o princípio do solid de ter apenas uma função
@Injectable()
export class ReadNotification {
    constructor(private notificationRepository: NotificationsRepository) {

    }

    async execute(request: ReadNotificationRequest): Promise<ReadNotificationResponse> {
        const { notificationId } = request;

        const notification = await this.notificationRepository.findById(
            notificationId,
        );

        if (!notification) {
            throw new NotificationNotFound();
        }

        notification.read();

        await this.notificationRepository.save(notification);
    }
}