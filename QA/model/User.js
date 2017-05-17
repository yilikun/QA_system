/**
 * Created by yilikun on 2015/3/2.
 */
//保存登陆用户的信息
const mongoose = require('mongoose');
//使用mongoose的Schema方法
const Schema = mongoose.Schema;
//使用使id变短的中间件
const shortid = require('shortid');
const UserSchema = new Schema({
    //用户的id
    _id:{
        type:String,
        default:shortid.generate,
        unique:true //id经常会被查询，所以作为索引
    },
    //用户名
    name:{
        type:String,
        require:true
    },
    //密码
    password:{
        type:String,
        require:true
    },
    //邮箱
    email:{
        type:String
    },
    //一句话简介
    motto:{
        type:String,
        default:'这家伙很懒，什么都没有留下'
    },
    //个人头像
    avater:{
        type:String,
        default:'/public/images/avater.jpg'
    },
    //创建时间
    createTime:{
        type:Date,
        default:Date.now
    }
})
const User = mongoose.model('User',UserSchema);
module.exports = User;