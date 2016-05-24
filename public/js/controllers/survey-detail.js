var app = angular.module('app');
app.controller('surveyDetail', [
  '$scope',
  '$http',
  '$routeParams',
  function($scope, $http, $routeParams) {
    console.log($routeParams);

    var promise = $http.get("/survey-result/" + $routeParams.surveyId);
    promise.then(
      function(response) {
        $scope.surveyDetail = response.data.survey_result_detail;

      }
    ).catch(function(response) {
      //  console.error('Gists error', response.status, response.data);
    });

  }
]);
