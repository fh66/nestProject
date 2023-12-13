import {Body, Controller, Get, Post} from '@nestjs/common'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {} // 注入UserService

    @Post('/createUser') // 创建用户
    createUser(@Body() body) {
        return this.userService.createUser(body)
    }
}