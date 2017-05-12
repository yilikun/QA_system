@echo off
cls
echo.  
echo *******************************************
echo 		作者：易李坤				   										
echo 	    2017/4/20				       
echo *******************************************				
echo 初始化程序. . . 
echo. rem 空格一行
set/p=  ■<nul
for /L %%i in (1 1 38) do set /p a=■<nul&ping /n 1 127.0.0.1>nul
echo   100%%
echo 数据库位于F:\我的后端知识\01node项目练习\06QA\QAdb


rem 使用mongodb
mongod.exe --dbpath F:\我的后端知识\01node项目练习\06QA\QAdb

pause
