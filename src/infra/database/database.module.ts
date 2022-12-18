import { Module } from "@nestjs/common";
import { NotificationsRepository } from "src/application/repositories/notification-repository";
import { PrismaService } from "./prisma/prisma.service";
import { PrimaNotificationsRepository } from "./prisma/repositories/prisma-notifications-repository";

@Module({
    providers: [PrismaService,
    {
        provide: NotificationsRepository,
        useClass: PrimaNotificationsRepository
    }],
    exports: [
        NotificationsRepository
    ],
})
export class DatabaseModule {}