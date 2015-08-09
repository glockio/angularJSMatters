function MatterDetail ($scope, $templateCache, $filter, mattersFactory) {


  $scope.shouldShowPlaceholder = function (){
    console.log("eval")
    return !!mattersFactory.getFocusMatter()
  };

  $scope.clearFocusMatter = function () {
    mattersFactory.setFocusMatter("");
  };
};

angular.module("app.matters").controller("MatterDetail",  ["$scope", "$templateCache","$filter", "mattersFactory",  MatterDetail]);