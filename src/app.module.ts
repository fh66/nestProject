import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from "./user/user.schema";
import { CaptchaController } from './captcha/captcha.controller'
import { CaptchaService } from './captcha/captcha.service'
import { UserService } from './user/user.service'
import { UserController } from './user/user.controller'

@Module({
  imports: [
      MongooseModule.forRoot(
            'mongodb://root:123456@localhost:27017/my-project?authSource=admin', // 连接数据库
      ),
      MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), // 注册User模型
  ],
  controllers: [CaptchaController, UserController],
  providers: [CaptchaService, UserService],
})
export class AppModule {}
