;(function(){
  'use strict';
  angular.module('app.controllers',[])
  .controller('surveyDetail', [
    '$scope',
    '$http',
    '$routeParams',
    'BASE_URL',
    'surveyDetailService',
    function($scope, $http,$routeParams,BASE_URL,surveyDetailService) {
      $scope.spinner = true;
      surveyDetailService.getSurveyDetail().then(
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
          $scope.spinner = false;
      });
    }
  ]);

})();
