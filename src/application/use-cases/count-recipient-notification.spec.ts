import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notifications-repository";
import { Notification } from "@application/entities/notification";
import { Content } from "@application/entities/content";
import { CountRecipientNotifications } from "./count-recipient-notifications";
import { makeNotification } from "../../../test/factories/notification-factory";


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
            makeNotification({ recipientId: 'recipient-1' }),
        );

        await notificationsRepository.create(
            makeNotification({ recipientId: 'recipient-1' }),
        );

        await notificationsRepository.create(
            makeNotification({ recipientId: 'recipient-2' }),
        );

        // Factory é uma função que retorna um objeto.

        const { count } = await countRecipientNotifications.execute({
            recipientId: 'recipient-1',
        });

        expect(count).toEqual(2);
    });
});