import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model, Document} from 'mongoose';

@Injectable()
export class AppService {
    constructor(@InjectModel('Blog') private readonly blogModel: Model<Document>) {
    } // 注入Blog模型
    getHello(): string {
        return 'Hello World!';
    }

    createBlog(createBlogDto) {
        return this.blogModel.create(createBlogDto);
    }

    getBlogs() {
        return this.blogModel.find();
    }
}
