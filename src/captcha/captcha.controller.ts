import {Body, Controller, Get, Post} from '@nestjs/common'
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
    verifyCaptcha(@Body() body): boolean | string {
        return this.captchaService.verifyCaptcha(body.code) // 验证验证码
    }
}