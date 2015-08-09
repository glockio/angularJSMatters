angular.module("app.matters").directive('matterItem', function() {

  return {
    restrict: 'EA',
    scope: {
      matter: '=',
      "client": "="
    },
    templateUrl: "core/matters/directives/matter_item/matter_item.html",
    controller: "matterItemCtrl"
  };
});