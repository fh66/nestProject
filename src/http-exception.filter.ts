import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp(); // 获取上下文
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        // const status = exception.getStatus();
        const status = 200;
        const exceptionRes: any = exception.getResponse();
        const error = exceptionRes.error;
        const message = exceptionRes.message;
        const code = exceptionRes.statusCode;
        const timestamp = new Date().toISOString();
        response
            .status(status)
            .json({
                code,
                error,
                message,
                timestamp,
                path: request.url,
            });
    }
}