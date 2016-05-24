/**
 * Main controller to run the angualr app and loads list of surveys
 */
var app = angular.module('app');
app.controller('main', [
  '$scope',
  '$http',
  'BASE_URL',
  function($scope, $http, BASE_URL) {
    var promise = $http.get(BASE_URL + "/get-surveys-list");
    $scope.spinner = true;
    promise.then(
      function(response) {

        // Display error if no data is returned
        if (!response.data) {
          $scope.error = true;
        } else {
          $scope.menuItems = response.data.survey_results;
        }
        $scope.spinner = false;
      }
    ).catch(function(response) {
      $scope.error = true;
    }).finally(function() {
      $scope.spinner = false;
    });
  }
]);
