/**
 * Created by yilikun on 2015/3/2.
 */
const express = require('express');
const router = express.Router();

const home = require('./routes/home');
const regist = require('./routes/regist');
const login = require('./routes/login');
const topic = require('./routes/topic');
const article = require('./routes/article');

//首页路由
router.get('/',home.index);

//注册页面路由
router.get('/regist',regist.index);

//登陆页面路由
router.get('/login',login.index);

//话题页面路由
router.get('/topic',topic.index);

//问题详情页面路由
router.get('/article',article.index);

module.exports = router;