/**
 * Navigation bar directive is used to create dnyamic navbar based on surveys received from server
 * It can be bind based on element name and element attribute
 *
 * E.g. <nav navigation-bar></nav>
 */
var app = angular.module('app');
app.directive('navigationBar', function() {
  return {
    restrict: 'AE',
    scope: false,
    templateUrl: '/partials/navigation.html'
  };
});
