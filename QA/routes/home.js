/**
 * Created by yilikun on 2015/3/2.
 */
exports.index = (req,res,next) => {
    res.render('index',{
        title:'首页'
    })
}