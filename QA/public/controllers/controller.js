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
            header:{'Content-Type':'application/x-www-form-urlencoded'}
        }).success((data)=>{
            console.log(data)
        }).error((err)=>{
            console.log(err)
        })

    }

});