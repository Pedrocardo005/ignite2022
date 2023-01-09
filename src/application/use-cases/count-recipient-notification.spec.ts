import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notifications-repository";
import { Notification } from "@application/entities/notification";
import { Content } from "@application/entities/content";
import { CountRecipientNotifications } from "./count-recipient-notifications";


describe('Count recipients notifications', () => {
    it('should be able to count recipient notifications', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const countRecipientNotifications = new CountRecipientNotifications(notificationsRepository,);

        const notification = new Notification({
            category: 'social',
            content: new Content('Nova solicitação de amizade!'),
            recipientId: 'example-recipient-id',

        });

        await notificationsRepository.create(
            new Notification({
                category: 'social',
                content: new Content('Nova solicitação de amizade!'),
                recipientId: 'example-recipient-id',
            }),
        );

        await notificationsRepository.create(
            new Notification({
                category: 'social',
                content: new Content('Nova solicitação de amizade!'),
                recipientId: 'example-recipient-id',
            }),
        );

        await CountRecipientNotifications.execute({
            notificationId: notification.id,
        });

        expect(notificationsRepository.notifications[0].canceledAt).toEqual(
            expect.any(Date),
        );
    });
});