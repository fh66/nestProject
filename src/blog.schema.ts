import * as mongoose from 'mongoose';

export const BlogSchema = new mongoose.Schema({ // 定义Blog模型
    title: String, // 标题
    author: String, // 作者
    body: String, // 内容
    comments: [{ body: String, date: Date }], // 评论
    date: { type: Date, default: Date.now }, // 日期
    hidden: Boolean, // 是否隐藏
    meta: {
        votes: Number, // 投票
        favs: Number // 收藏
    }
})