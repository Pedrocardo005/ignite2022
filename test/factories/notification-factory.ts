import { Content } from "@application/entities/content";
import { Notification, NotificationProps } from "@application/entities/notification";

// Partial indica que todas as propriedades são opcionais ou indefinidas.
type Override = Partial<NotificationProps>

export function makeNotification(override: Override = {}) {
    // make é bom utilizar porque significa que cria algo.
    return new Notification({
        category: 'social',
        content: new Content('Nova solicitação de amizade!'),
        recipientId: 'recipient-2',
        ...override,
    });
}