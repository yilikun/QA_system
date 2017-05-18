/**
 * Created by yilikun on 2015/3/2.
 */
//angular 注册模块
const registApp = angular.module('registApp',[]);
registApp.controller('registCtrl',($scope,$http)=>{
    //数据
    $scope.formData = {};
    //表单的提交行为
    $scope.postForm = () => {
        $http({
            method:'POST',
            url:'/regist',
            data:$.param($scope.formData),
            headers:{'Content-Type':'application/x-www-form-urlencoded'}
        }).success((data)=>{
            console.log(data);
            if(data == 'success'){
                $scope.success = '注册成功，3秒后跳转到登陆页面，请注意查收邮件';
                $('#successbox').fadeIn();
                setTimeout(()=>{
                    window.location.href='/login';
                },3*1000);
            }else{
                $scope.error = data;
                $('#errorbox').fadeIn();
                setTimeout(()=>{
                    $('#errorbox').fadeOut();
                },1000)
            }
        }).error((err)=>{
            console.log(err);
        })
    }
});

//登陆模块
const loginApp = angular.module('loginApp',[]);
loginApp.controller('loginCtrl',($scope,$http)=>{
    //数据
    $scope.formData={};
    //登陆表单的提交
    $scope.loginForm = ()=>{
        $http({
            method:'POST',
            url:'/login',
            data:$.param($scope.formData),
            headers:{'Content-Type':'application/x-www-form-urlencoded'}
        }).success((data)=>{
            console.log(data)
        }).error((err)=>{
            console.log(err);
        })
    }
});