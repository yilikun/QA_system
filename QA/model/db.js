/**
 * Created by yilikun on 2015/3/2.
 */
const mongoose = require('mongoose');
const setting = require('../setting');
//nodejs自带加密模块
const crypto = require('crypto');
//??????????????
const url = require('url');
//使用es6原生的promise对象；
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${setting.host}/${setting.db}`);
const DbSet = {
    //新增操作
    addOne: (obj, req, res, logMsg) => {
        let newObj = new obj(req.body);
        console.log(newObj);
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
    },
    //加密模块（自己设计）
    encrypt : function(data,key){
        let cipher = crypto.createCipher("bf",key);
        let newPsd = "";
        newPsd += cipher.update(data,"utf8","hex");
        newPsd += cipher.final("hex");
        return newPsd;
    },
    //解密模块（自己设计）
    decrypt : function(data,key){
        let decipher = crypto.createDecipher("bf",key);
        let oldPsd = "";
        oldPsd += decipher.update(data,"hex","utf8");
        oldPsd += decipher.final("utf8");
        return oldPsd;
    }

}
module.exports = DbSet;