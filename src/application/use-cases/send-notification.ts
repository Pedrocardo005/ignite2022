import { Injectable } from "@nestjs/common";
import { Content } from "../entities/content";
import { Notification } from "../entities/notification";
import { NotificationsRepository } from '../repositories/notification-repository';
interface SendNotificationRequest {
    recipientId: string;
    content: string;
    category: string;
}

interface SendNotificationResponse {
    notification: Notification;
}

// Utiliza o princípio do solid de ter apenas uma função
@Injectable()
export class SendNotification {
    constructor(private notificationRepository: NotificationsRepository) {

    }

    async execute(request: SendNotificationRequest): Promise<SendNotificationResponse> {
        const { recipientId, content, category } = request;

        const notification = new Notification({
            recipientId,
            content: new Content(content),
            category,
        });

        await this.notificationRepository.create(notification);
        // Diego sempre gosta de retornar um objeto porque depois pode precisar adicionar mais coisas
        // O retorno permanecerá.
        return {
            notification,
        };
    }
}