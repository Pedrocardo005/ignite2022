import { Notification } from "@application/entities/notification";

export class PrismaNotificationMapper {
    // Mapper tem a função de converter o formato
    static toPrisma(notification: Notification) {
        return {
            id: notification.id,
            category: notification.category,
            content: notification.content.value,
            recipientId: notification.recipientId,
            readAt: notification.readAt,
            createdAt: notification.createdAt,
        };
    }
}