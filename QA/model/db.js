/**
 * Created by yilikun on 2015/3/2.
 */
const mongoose = require('mongoose');
const setting = require('setting');
const url = require('url');
//使用es6原生的promise对象；
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${setting.host}/${setting.db}`);
const Dbset = {
    //新增操作
    addOne: (obj, req, res, logMsg) => {
        let newObj = new obj(req.body);
        newObj.save().then(result => {
            res.end(logMsg);
        }).catch(err => {
            res.end(err);
        })
    },
    //删除
    delOne: (obj, req, res, logMsg) => {
        let params = url.parse(req.url,true);
        let targetId = params.query.id;
        obj.remove({_id:targetId}).then(result =>{
            res.end(logMsg);
        }).catch(err => {
            res.end(err);
        })
    },
    //修改
    updateOne:(obj,req,res,logMsg) => {
        let params = url.parse(req.url,true);
        let targetId = params.query.id;//?????????????????
        req.body.updateDate = new Date();
        let update = {$set:req.body};//??????????????
        obj.update({_id:targetId},update).then(result =>{
            res.end(logMsg);
        }).catch(err => {
            res.end(err);
        })
    },
    //查询
    findOne:(obj,req,res,logMsg) => {
        let params = url.parse(req.url,true);
        let targetId = params.query.id;
        obj.findOne({_id:targetId}).then(result => {
            res.json(result);
        }).catch(err => {
            res.end(err);
        })
    },
    //查询所有
    findAll:(obj,req,res,logMsg) => {
        /*let params = url.parse(req.url,true);
        let targetId = params.query.id;
        obj.findAll({})*/
        obj.find({}).then(result =>{
            res.json(result);
        }).catch(err => {
            res.end(err);
        })
    }
}
module.exports = Dbset;