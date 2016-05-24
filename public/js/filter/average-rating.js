var app = angular.module('app');

app.filter("average", function(){

  return function(input){
    var sumOfRating = 0;
    var noOfRating = 0;
    for(var i in input){
      // don't count if response is empty
      if(input[i].response_content === "")
      {
        continue;
      }
      sumOfRating += parseInt(input[i].response_content);
      noOfRating++;
    }
    // return average rating of a question
  return Math.ceil(sumOfRating/noOfRating);
 }
});
