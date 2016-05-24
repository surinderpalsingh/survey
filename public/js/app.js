var app = angular.module('app', ['ngRoute']);

app.controller('surveyDetail', [
  '$scope',
  '$http',
  '$routeParams',
  function($scope, $http, $routeParams) {

    var promise = $http.get("/survey-result/" + $routeParams.surveyId);

    // TODO Display spinner while loading data
    promise.then(
      function(response) {
        $scope.surveyDetail = response.data.survey_result_detail;
      }
    ).catch(function(response) {
      // TODO handle error if server call failsxasxa
      //  console.error('Gists error', response.status, response.data);
    });

  }
]);
