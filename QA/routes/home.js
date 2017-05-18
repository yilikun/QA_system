/**
 * Created by yilikun on 2015/3/2.
 */
//=======首页的所有get，post请求==========

//引入数据库连接文件
const DbSet = require('../model/db');
//引入User集合文件
const User = require('../model/User');
//引入表单验证
const validator = require('validator');
//引入配置文件
const SETTING = require('../setting');
//引入邮箱设置文件
const mail = require('../common/mail');
exports.index = (req,res,next) => {
    res.render('index',{
        title:'首页'
    })
}
//注册页面
exports.regist = (req,res,next) => {
    res.render('regist',{
        title:'注册'
    })
}
//注册业务逻辑
exports.doRegist = (req,res,next) => {
    //1，后端验证注册表单post过来的表单数据
    console.log(req.body.name)
    let name = req.body.name;
    let password = req.body.password;
    let email = req.body.email;
    let error;
    if(!validator.matches(name,/^[a-zA-Z][a-zA-Z0-9_]{4,11}$/,'g')){
        error = '用户名不合法，5-12位，数字字母下划线'
    }
    if(!validator.matches(password,/(?!^\\d+$)(?!^[a-zA-Z]+$)(?!^[_#@]+$).{5,}/,'g')
        || !validator.isLength(password,6,12)){
        error = '密码长度5-12位，非特殊字符'
    }
    if(!validator.isEmail(email)){
        error = '邮箱的格式不正确'
    }
    //如果验证过程中产生错误，那么发送这个错误的提示信息
    if(error){
        res.end(error);
    }else{
        //2,验证成功之后，判断一下用户名和邮箱是否已经存在
        let query = User.find().or([{email:email},{name:name}]);
        query.exec().then((user)=>{
            if(user.length > 0){
                error = '用户名/邮箱已存在';
                res.end(error);
            }else{
                //发一封邮件
                let regMsg = {name:name,email:email};
                mail.sendEmail('reg_mail',regMsg,(err,info)=>{
                    if(err) res.end(err);
                });
                //密码加密
                let newPSD = DbSet.encrypt(password,SETTING.PSDkey);
                req.body.password = newPSD;
                //调用数据库操作--》添加一个用户
                DbSet.addOne(User,req,res,'success');
            }
        }).catch((err)=>{
            res.end(err);
        })
    }
}
//登陆页面
exports.login = (req,res,next) => {
    res.render('login',{
        title:'登录'
    })
}
//登陆业务逻辑
exports.doLogin = (req,res,next) =>{
    //1，验证
    //2.判断一下是用户名登陆还是邮箱登陆
    //3.查找用户名或者邮箱是否存在
    //4.对应的密码是否一致
    //5.登陆后，创建cookie，通过cookie生成session，完成最后的登陆。
    const username = req.body.name;
    let getEmail;
    let getName;
    username.includes('@') ? email = username : name = str;
    if(getEmail){
        if(!validator.isEmail){

        }
    }
    const password = req.body.password;

}
