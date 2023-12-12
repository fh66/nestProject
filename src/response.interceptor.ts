import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class TransformResponseInterceptor<T> implements NestInterceptor { // 实现NestInterceptor接口
    intercept(context: ExecutionContext, next: CallHandler<T>): Observable<any> | Promise<Observable<any>> { // 实现intercept方法
        return next.handle().pipe(map(data => { // 使用pipe方法
            return {
                code: context.switchToHttp().getResponse().statusCode,
                data,
                message: '请求成功'
            }
        }))
    }
}

interface Response<T> {
    code: number;
    data: T;
    message: string;
}