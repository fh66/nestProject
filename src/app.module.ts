import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CaptchaController } from './captcha/captcha.controller'
import { CaptchaService } from './captcha/captcha.service'

@Module({
  imports: [
      MongooseModule.forRoot(
            'mongodb://root:123456@localhost:27017/my-project?authSource=admin', // 连接数据库
      ),
  ],
  controllers: [CaptchaController],
  providers: [CaptchaService],
})
export class AppModule {}
