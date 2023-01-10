import { Notification } from "../entities/notification";
// Diz quais métodos deverão ter. Funciona melhor no nest com classe abstrata.
export abstract class NotificationsRepository {
    abstract create(notification: Notification): Promise<void>;
    abstract findById(notificationId: string): Promise<Notification | null>;
    abstract save(notification: Notification): Promise<void>;
    // pode deixa grande se precisar ser claro.
    abstract countManyByRecipientId(recipientId: string): Promise<number>;
    abstract findManyByRecipientId(recipientId: string): Promise<Notification[]>;
}