/**
 * Created by yilikun on 2015/3/2.
 */
module.exports = {
    host:'localhost',
    port:27017,
    db:'qadb',
    //加密模块传的参数--》密码
    PSDkey:'yilikun',
    //邮箱发送的设置
    mail_opts:{
        //邮箱的服务器地址
        host:'smtp.163.com',
        //邮箱权限授权码
        auth:{
            user:'yilikun_dimon@163.com',//发送者邮箱
            pass:'yilikun0805'           //发送者授权码
        }
    },
    //社区名称
    name:'node8问答社区'
}