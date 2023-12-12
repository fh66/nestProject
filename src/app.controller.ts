import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('home')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("blog")
  createBlog(@Body() createBlog) {
    return this.appService.createBlog(createBlog);
  }
  @Get("blogs")
  getBlogs() {
    return this.appService.getBlogs();
  }
}
