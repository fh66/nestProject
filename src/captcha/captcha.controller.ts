import { Controller, Get, Res } from '@nestjs/common'
import { CaptchaService } from './captcha.service'

@Controller('captcha')
export class l { // 生成验证码
    constructor(private readonly captchaService: CaptchaService) {} // 注入CaptchaService

    @Get()
    getCaptcha(@Res() res): void{ // 生成验证码
        const captcha = this.captchaService.generateCaptcha() // 生成验证码
        res.type('url') // 设置返回的数据类型
        res.send(captcha.data) // 返回验证码图片
    }
}