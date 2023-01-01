import { Replace } from "@helpers/Replace";
import { Content } from "./content";
import { randomUUID } from "node:crypto";

// Criou essa interface pra poder funcionar os gets/sets
export interface NotificationProps {
    recipientId: string;
    content: Content;
    category: string;
    // Com interrogação pode ser date ou undefined.
    // Undefined é quando não foi setado
    // null é quando teve mas retiraram e não colocaram nada
    // null parece um branco
    // Nessa variável, pode ser null, undefined e Date
    readAt?: Date | null;
    canceledAt?: Date | null;
    createdAt: Date;
}

export class Notification {
    private _id: string;
    private props: NotificationProps;

    // Fazendo assim, indica que todos os atributos devem ser passados
    //no construtor, sem precisar escrever aquilo tudo.
    constructor(props: Replace<NotificationProps, {createdAt?: Date }>) {
        this._id = randomUUID();
        // Coloca os itens normalmente mas o createdAt é opicional
        this.props = {
            ...props,
            // Se ele for informado usará, caso não, usará a data atual
            createdAt: props.createdAt ?? new Date(),
        }
    }

    public get id() {
        return this._id;
    }

    // Assim permite acessar o atributo apenas com ponto
    public set recipientId(recipientId: string) {
        this.props.recipientId = recipientId;
    }

    public get recipientId(): string {
        return this.props.recipientId;
    }

    public set content(content: Content) {
        this.props.content = content;
    }

    public get content(): Content {
        return this.props.content;
    }

    public set category(category: string) {
        this.props.category = category;
    }

    public get category(): string {
        return this.props.category;
    }

    public set readAt(readAt: Date | null | undefined) {
        this.props.readAt = readAt;
    }

    public get readAt(): Date | null | undefined {
        return this.props.readAt;
    }

    public cancel() {
        this.props.canceledAt = new Date();
    }

    public get canceledAt(): Date | null | undefined {
        return this.props.canceledAt;
    }

    /* Não faz sentido alterar a data de criação
    public set createdAt(createdAt: Date) {
        this.props.createdAt = createdAt;
    }
    */

    public get createdAt(): Date {
        return this.props.createdAt;
    }
}