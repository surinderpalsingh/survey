console.log('Navigation bar');
var app = angular.module('app');

app.directive('navigationBar', function() {
  return {
      restrict: 'AE',
      scope : false,
      templateUrl:'/partials/navigation.html'
  };
});
