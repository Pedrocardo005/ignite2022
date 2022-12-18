import { Notification } from "../entities/notification";
// Diz quais métodos deverão ter. Funciona melhor no nest com classe abstrata.
export abstract class NotificationsRepository {
    abstract create(notification: Notification): Promise<void>;
}