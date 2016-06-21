;(function(){
  'use strict';
  angular.module('app.routes',['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/:path/:surveyId', {
        templateUrl: '/partials/survey-detail.html',
        controller: 'surveyDetail',
      });
  }]);
})();
