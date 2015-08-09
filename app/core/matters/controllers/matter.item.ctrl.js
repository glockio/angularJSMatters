function matterItemCtrl ($scope, $templateCache, $filter, clientsFactory, mattersFactory) {
  // $scope.client
  // $scope.matter

  $scope.toggleSelectedStatus = function  (e) {
    e.preventDefault();
    e.stopPropagation();
    $scope.matter.selected ? ($scope.matter.selected = false) : ($scope.matter.selected = true);
  };

  $scope.isClosed= function () {
    return $scope.matter.status === "closed";
  };

  $scope.closeMatter = function () {
    $scope.matter.status="closed";
  };

  $scope.deleteMatter = function () {
    index = $scope.client.matters.indexOf($scope.matter);
    $scope.client.matters.splice(index,1);
  };


  $scope.setFocusMatter = function(){
    mattersFactory.setFocusMatter($scope.matter);
  };

};

angular.module("app.matters").controller("matterItemCtrl",

  [
    "$scope", "$templateCache","$filter",
    "clientsFactory", "mattersFactory",
    matterItemCtrl
  ]
);