import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({ // 定义User模型
    username: String, // 用户名
    password: String, // 密码
    email: String, // 邮箱
    phone: String, // 手机号
})