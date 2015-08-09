angular.module("app").directive('textDivider', function() {
  return {
    restrict: 'EA',
    scope: {
      collection: '=',
      pluralName: "@",
      singleName: "@"
    },
    templateUrl: "core/matters/directives/text_divider/text_divider.html",
    controller: ['$scope', '$templateCache', function($scope, $templateCache) {
      // console.log($scope)
    }]
  }
});