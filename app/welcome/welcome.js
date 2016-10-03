'use strict';
 
angular.module('myApp.welcome', ['ngRoute'])
 
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/welcome', {
        templateUrl: 'welcome/welcome.html',
        controller: 'WelcomeCtrl'
    });
}])
 
.controller('WelcomeCtrl', ['$scope', 'CommonProp' , function($scope,CommonProp) {
 console.log(CommonProp.getUser);
 $scope.username = CommonProp.getUser().email;

}]);