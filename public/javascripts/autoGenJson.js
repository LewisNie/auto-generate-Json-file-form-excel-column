/**
 * Created by luyuannie on 16/6/30.
 */
(function(){
    var app = angular.module("autoGenJson",[]);
    app.controller("autoGenController",['$scope',function($scope){
        $scope.createJson= function(attr,str){
            var spilt = str.split('\n');
            console.log(spilt);
            var obj =[];
            for(var i=0;i<spilt.length;i++){
                var temp={};
                temp["id"]=i;
                temp[attr]=spilt[i];
                obj.push(temp);
            }
            $scope.displayObj=JSON.stringify(obj);
            console.log(obj);
        }
    }])
})();