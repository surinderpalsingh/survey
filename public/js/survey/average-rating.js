;(function(){
  'use strict';
  /**
   * Average filter is used to calculate average rating for a question. It doesn't include empty reosne while calculating.
   * It accept array of questions reponses
   * {{ question.survey_responses | average}}
   */
  angular.module('app.filters',[])
    .filter("average", function() {
    return function(input) {
      var sumOfRating = 0;
      var noOfRating = 0;
      for (var i in input) {
        // don't count if response is empty
        if (input[i].response_content === "") {
          continue;
        }
        sumOfRating += parseInt(input[i].response_content);
        noOfRating++;
      }

      // return average rating of a question
      return Math.ceil(sumOfRating / noOfRating);
    };
  })
  .filter('myFilter', function() {
    return function(input, optional1, optional2) {
        var output;
        return output;
    };
  });
})();
