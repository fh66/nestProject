import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformResponseInterceptor } from './response.interceptor';
import { HttpExceptionFilter } from './http-exception.filter'
import * as session from "express-session";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(session({
    secret: "my_project", // 用来对session id相关的cookie进行签名
    resave: false, // 是否每次都重新保存会话，建议false
    saveUninitialized: false, // 是否自动保存未初始化的会话，建议false
    rolling: true, // 是否按照原设定的maxAge值重设session同步到cookie中，建议true
  }))
  app.useGlobalInterceptors(new TransformResponseInterceptor()); // 全局注册响应拦截器
  app.useGlobalFilters(new HttpExceptionFilter()); // 全局注册异常过滤器
  await app.listen(3000);
}
bootstrap();
