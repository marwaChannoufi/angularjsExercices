var myApp =angular.module('myApp',[])

myApp.controller('controller',['$scope','$http',($scope,$http)=>{
    $scope.person={
        'name':'marwa channoufi',
        'age':'29',
        'job':'developer web'

    } 

    $http.get("/js/data.json").then((res)=>{
          
        $scope.team =res.data
    })
    

}])
console.log("hello wolrd")