;(function(){
  'use strict';
  /**
   * Average rating directive is used to display average rating stars based on average calculate by average filter
   * E.g. E.g. <div average-rating rating="5"></div>
   */
  angular.module('app.directives')
  .directive('averageRating',[
    '$http',
    '$routeParams',
    'BASE_URL',
    function() {
      return {
        restrict: 'AE',
        scope: {
          rating: '@'
        },
        templateUrl: '/partials/rating.html'
      };
    }
  ]);
})();
