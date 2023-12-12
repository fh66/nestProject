import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformResponseInterceptor } from './response.interceptor';
import { HttpExceptionFilter } from './http-exception.filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new TransformResponseInterceptor()); // 全局注册响应拦截器
  app.useGlobalFilters(new HttpExceptionFilter()); // 全局注册异常过滤器
  await app.listen(3000);
}
bootstrap();
