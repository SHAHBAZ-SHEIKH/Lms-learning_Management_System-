
import { Module } from '@nestjs/common';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { ZodSerializerInterceptor, ZodValidationPipe } from 'nestjs-zod';
import { ThrottlerBehindProxyGuard } from 'src/common/guards/throttler-behind-proxy.guard';
import { HttpExceptionFilter } from 'src/common/services/http-exception.filter';
import { prismaService } from 'src/common/services/prisma.service';
// import { AdminRoutingModule } from './student.routing.module';
import { UserModule } from './user/user.module';
import { StudentRoutingModule } from './student.routing.module';



export const ADMIN_MODULE = [
    UserModule
]

@Module({
  imports: [
    ...ADMIN_MODULE,
    StudentRoutingModule,
  ],
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
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    { provide: APP_INTERCEPTOR, useClass: ZodSerializerInterceptor },
  ],
})
export class StudentModule { }
