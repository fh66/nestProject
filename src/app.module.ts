import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogSchema } from './blog.schema';

@Module({
  imports: [
      MongooseModule.forRoot(
            'mongodb://root:123456@localhost:27017/my-project?authSource=admin', // 连接数据库
      ),
      MongooseModule.forFeature([{ name: 'Blog', schema: BlogSchema }]), // 注册Blog模型
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
