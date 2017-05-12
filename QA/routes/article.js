/**
 * Created by yilikun on 2015/3/2.
 */
exports.index = (req,res,next) => {
    res.render('article',{
        title:'问题详情'
    })
}