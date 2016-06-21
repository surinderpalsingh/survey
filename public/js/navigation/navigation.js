;(function(){
  'use strict';

  /**
   * Navigation bar directive is used to create dnyamic navbar based on surveys received from server
   * It can be bind based on element name and element attribute
   *
   * E.g. <nav navigation-bar></nav>
   */
  angular.module('app.directives',[])
  .directive('navigationBar', [
    '$http',
    '$routeParams',
    'BASE_URL',
    '$location',
    function($location) {
      return {
        restrict: 'AE',
        scope: false,
        templateUrl: '/partials/navigation.html',
        controller: function($scope,$http, $routeParams,BASE_URL,$location)
        {
          $scope.isActive = function(viewLocation){
            var active = false;
            if(viewLocation === $location.path()){
                active = true;
            }
            return active;
          };
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
            }
          ).catch(function(response) {
            $scope.error = true;
          }).finally(function() {
            $scope.spinner = false;
          });
        },
        link: function(scope, element, attrs, controller) {
          scope.$on('$routeChangeStart', function() {
              console.log();
        });
        }
      };
  }]);
})();
