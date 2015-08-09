angular.module("app.matters").directive('avatar', function() {
  return {
    restrict: 'E',
    scope: {
      imageSource: '@',
      test: "@"

    },
    templateUrl: "core/matters/directives/avatar/avatar.html",
    controller: ['$scope', '$templateCache', function($scope, $templateCache) {


    }]

  }
});