var app = angular.module('app');
app.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/', {
      controller: 'main'
    })
    .when('/survey_results/:surveyId', {
      templateUrl: '/partials/survey-detail.html',
      controller: 'surveyDetail'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
