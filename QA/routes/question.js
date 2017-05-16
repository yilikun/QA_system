/**
 * Created by yilikun on 2015/3/2.
 */
exports.index = (req,res,next) => {
    res.render('question',{
        title:'问题详情'
    })
}
exports.publish = (req,res,next) => {
    res.render('publish',{
        title:'发布问题'
    })
}