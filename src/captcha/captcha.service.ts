import {Injectable} from '@nestjs/common'; // 引入Injectable装饰器
import * as svgCaptcha from 'svg-captcha'; // 引入svg-captcha模块

@Injectable() // 使用Injectable装饰器
export class CaptchaService {
    private captcha = String()
    generateCaptcha() { // 生成验证码
        const captcha = svgCaptcha.create({ // 生成svg图片
            size: 4, // 验证码长度
            fontSize: Math.floor(Math.random() * 10) + 40, //生成40~50大小的验证码
            width: 100, // 验证码图片宽度
            height: 40, // 验证码图片高度
            ignoreChars: '0o1i', // 验证码字符中排除'0o1i'
            noise: Math.floor(Math.random() * 5), // 干扰线条数
            color: true, // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有
            background: '#eee' // 验证码图片背景颜色
        })
        this.captcha = captcha.text.toLowerCase() // 将验证码文本转为小写
         // 将svg图片转为base64编码
        return `data:image/svg+xml;base64,${Buffer.from(captcha.data).toString('base64')}`
    }
    verifyCaptcha(captcha: string): boolean | string { // 验证验证码
        if (captcha === this.captcha) {
            return true
        } else {
            return ''
        }
    }
}