/**
 * Created by yilikun on 2015/3/2.
 */
exports.index = (req,res,next) => {
    res.render('index',{
        title:'首页'
    })
}
exports.regist = (req,res,next) => {
    res.render('regist',{
        title:'注册'

    })
}
exports.login = (req,res,next) => {
    res.render('login',{
        title:'登录'
    })
}
