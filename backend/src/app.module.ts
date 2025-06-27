import { Module } from '@nestjs/common';
import { APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { TerminusModule } from '@nestjs/terminus';
import { ThrottlerModule } from '@nestjs/throttler';
import { ZodSerializerInterceptor, ZodValidationPipe } from 'nestjs-zod';
import { prismaService } from './common/services/prisma.service';
import { ThrottlerBehindProxyGuard } from './common/guards/throttler-behind-proxy.guard';
import { StudentModule } from './module/student/student.module';

@Module({
  imports: [
    TerminusModule,
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 600000,
          limit: 1000,
        },
      ],
    }),
    StudentModule,
  ],
  controllers: [],
  providers: [
    prismaService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerBehindProxyGuard,
    },
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ZodSerializerInterceptor,
    },
  ],
})
export class AppModule { }
