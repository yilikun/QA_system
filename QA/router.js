/**
 * Created by yilikun on 2015/3/2.
 */
const express = require('express');
const router = express.Router();

const home = require('./routes/home');
const regist = require('./routes/regist');
const login = require('./routes/login');
const topic = require('./routes/topic');
const question = require('./routes/question');

//=====================首页===========================
//首页路由
router.get('/',home.index);

//注册页面路由
router.get('/regist',home.regist);
router.post('/regist',home.doRegist);

//登陆页面路由
router.get('/login',home.login);

//话题页面路由
router.get('/topic',topic.index);
//======================问题页面===============================

//问题详情页面路由
router.get('/question/:id',question.index);

//发布一个问题
router.get('/publish',question.publish);

//编辑一个问题
//router.get('question/edit',question.edit);

//=========================用户页面==================================
//个人设置
// router.get('/setting',user.setting);
//
// //用户列表
// router.get('/users',user.all);
//
// //个人中心
// router.get('/user/:name',user.index);
//
// //
// //某个用户的提问列表
// router.get('/user:name/questions',user.questions);
//
// //某个用户的回答列表
// router.get('/user:name/answers',user.answers);
//
// //=======================留言回复列表================================
//
// //============================消息列表===========================
// router.get('/notify',notify.index);

module.exports = router;