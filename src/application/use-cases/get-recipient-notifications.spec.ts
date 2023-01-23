import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notifications-repository";
import { Notification } from "@application/entities/notification";
import { Content } from "@application/entities/content";
import { CountRecipientNotifications } from "./count-recipient-notifications";
import { makeNotification } from "../../../test/factories/notification-factory";
import { GetRecipientNotifications } from "./get-recipient-notifications";


describe('Get recipients notifications', () => {
    it('should be able to get recipient notifications', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const getRecipientNotifications = new GetRecipientNotifications(notificationsRepository,);

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

        const { notifications } = await getRecipientNotifications.execute({
            recipientId: 'recipient-1',
        });

        expect(notifications).toHaveLength(2);
        expect(notifications).toEqual(expect.arrayContaining([
            expect.objectContaining({ recipientId: 'recipient-1' }),
            expect.objectContaining({ recipientId: 'recipient-1' }),
        ]));
    });
});