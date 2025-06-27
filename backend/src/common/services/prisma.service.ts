import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common"
import { PrismaClient } from "@prisma/client";

@Injectable()
export class prismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor() {
        super({
            log: ['query', 'info', 'warn', 'error'],
            transactionOptions: {
                maxWait: 10 * 60 * 1000,
                timeout: 10 * 60 * 1000
            },
            omit: {
                student: {
                    emailVerified: true,
                }
            }
        });
    }

    async onModuleInit(): Promise<void> {
        await this.$connect();
    }

    async onModuleDestroy(): Promise<void> {
        await this.$disconnect();
    }
}
