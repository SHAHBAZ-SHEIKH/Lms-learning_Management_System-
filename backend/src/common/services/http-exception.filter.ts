import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { Request, Response } from 'express';
import { ZodValidationException } from 'nestjs-zod';

@Catch(HttpException, ZodValidationException, ExceptionsHandler)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    const responseBody: any = exception.getResponse();
    let errorMessage: string;

    // Checking if the response body contains a 'message' field
    if (typeof responseBody === 'object' && 'message' in responseBody) {
      errorMessage = Array.isArray(responseBody['message'])
        ? responseBody['message'].join(', ')  // If 'message' is an array, join into a string
        : responseBody['message'];  // Otherwise, use the string directly
    } else {
      errorMessage = 'Unexpected error occurred'; // Fallback message
    }

    response
      .status(status)
      .send({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        error: errorMessage,
      });
  }
}
