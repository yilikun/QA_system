const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./router');

const app = express();

//设置模板引擎及文件夹
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
//设置处理post请求的中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));



app.use('/',router);


app.listen(3000,()=>{
    console.log('服务器在3000启动')
});