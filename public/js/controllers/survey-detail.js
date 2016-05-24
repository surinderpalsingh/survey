/**
 * This controller is used to load individula suvey details from server
 */


var app = angular.module('app');
app.controller('surveyDetail', [
  '$scope',
  '$http',
  '$routeParams',
  'BASE_URL',
  function($scope, $http, $routeParams,BASE_URL) {
    $scope.$parent.spinner = true;
    var promise = $http.get(BASE_URL + "/survey-result/" + $routeParams.surveyId);
    promise.then(
      function(response) {
        // Display error if no data is returned
        if(!response.data){
          $scope.error = true;
        } else{
          $scope.surveyDetail = response.data.survey_result_detail;
        }
      }
    ).catch(function(response) {
        $scope.error = true;
    }).finally(function(){
        $scope.$parent.spinner = false;
    });
  }
]);
