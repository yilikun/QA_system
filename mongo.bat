@echo off
cls
echo.  
echo *******************************************
echo 		���ߣ�������				   										
echo 	    2017/4/20				       
echo *******************************************				
echo ��ʼ������. . . 
echo. rem �ո�һ��
set/p=  ��<nul
for /L %%i in (1 1 38) do set /p a=��<nul&ping /n 1 127.0.0.1>nul
echo   100%%
echo ���ݿ�λ��F:\�ҵĺ��֪ʶ\01node��Ŀ��ϰ\06QA\QAdb


rem ʹ��mongodb
mongod.exe --dbpath F:\�ҵĺ��֪ʶ\01node��Ŀ��ϰ\06QA\QAdb

pause
