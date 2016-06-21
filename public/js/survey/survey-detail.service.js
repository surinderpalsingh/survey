;(function(){
  'use strict';
  /**
   * surveyDetailService loads survey detail of selected survey and pass data to the survey detail controller
   */
  angular.module('app.services',[])
    .service('surveyDetailService',[
      'BASE_URL',
      '$http',
      '$routeParams',
      function(BASE_URL,$http,$routeParams){
        return { getSurveyDetail: getSurveyDetail };
        function getSurveyDetail() {
          return $http.get(BASE_URL + "/" +$routeParams.path + "/" + $routeParams.surveyId);
        }
    }]);
})();
