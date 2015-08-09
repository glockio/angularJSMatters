function MatterDetail ($scope, $templateCache, $filter, mattersFactory) {

  $scope.clearFocusMatter = function () {
    mattersFactory.setFocusMatter("");
  }
};

angular.module("app.matters").controller("MatterDetail",  ["$scope", "$templateCache","$filter", "mattersFactory",  MatterDetail]);