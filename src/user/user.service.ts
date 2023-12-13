import {Injectable} from '@nestjs/common'; // 引入Injectable装饰器
import {InjectModel} from "@nestjs/mongoose"; // 引入InjectModel装饰器
import {Model, Document} from 'mongoose'; // 引入Model和Document类型

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<Document>) {} // 注入User模型

    // 创建用户
    createUser(createUserDto):string {
        console.log(createUserDto);
        if  (createUserDto.username && createUserDto.password) {
            this.userModel.create(createUserDto);
            return '创建成功'
        } else {
            return '缺少必要参数'
        }
    }
}