var app = angular.module('app');
app.controller('main', [
  '$scope',
  '$http',
  function($scope, $http) {
    var promise = $http.get("/get-surveys-list");
    promise.then(
      function(response) {
        $scope.menuItems = response.data.survey_results;
        console.log($scope.menuItems);
      }
    ).catch(function(response) {
      //  console.error('Gists error', response.status, response.data);
    });
  }
]);
