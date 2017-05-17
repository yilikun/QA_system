/**
 * Created by yilikun on 2015/3/2.
 */
const SETTING = require('../setting');
const nodemailer = require('nodemailer');

const mail = {
    //用来发送激活邮件
    sendEmail:(type,regMsg,callback)=>{
        //目标用户名和邮箱
        const name = regMsg.name;
        const email = regMsg.email;
        //创建SMTP服务
        const transporter = nodemailer.createTransport({
            service:'163',
            auth:{
                user:SETTING.mail_opts.auth.user,
                pass:SETTING.mail_opts.auth.pass
            }
        })
        //发送的配置参数
        const mailOptions = {
            from:SETTING.mail_opts.auth.user,//发送者的邮箱
            to:email,//接收者的邮箱
            subject:`来自${SETTING.name}，一起node起来！`,//发送的主题
            text:`${name}你好`,//发送的标题（貌似没用。。）
            html:`<b>恭喜${name}注册成功，请登录体验吧！</b>><a href="http://127.0.0.1:3000">我们的node社区~~</a>>`//发送的内容
        };
        //发送的行为
        transporter.sendMail(mailOptions,(error,info) => {
            if(error){
                callback(error);
            }
            callback(info);
        });
    }
}
module.exports = mail;