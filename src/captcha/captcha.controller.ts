import {Body, Controller, Get, HttpCode, HttpStatus, Post} from '@nestjs/common'
import {CaptchaService} from './captcha.service'

@Controller('captcha')
export class CaptchaController { // 生成验证码
    constructor(private readonly captchaService: CaptchaService) {} // 注入CaptchaService

    @Get()
    getCaptcha(): string{ // 生成验证码
         // 生成验证码
        return this.captchaService.generateCaptcha()
    }

    @Post('/verifyCaptcha') // 验证验证码
    @HttpCode(HttpStatus.OK) // 设置状态码
    verifyCaptcha(@Body() body): boolean | string {
        return this.captchaService.verifyCaptcha(body.code) // 验证验证码
    }
}