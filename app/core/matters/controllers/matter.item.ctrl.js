function matterItemCtrl ($scope, $templateCache, $filter, clientsFactory, mattersFactory) {


  $scope.$on("deleteAllSelectedMatters", function () {
    if($scope.matter.selected){_deleteMatter()};
  });

  $scope.$on("closeAllSelectedMatters", function () {

    if($scope.matter.selected){_closeMatter()};
  });

  $scope.showActions = false;

  $scope.toggleSelectedStatus = function  (e) {
    e.preventDefault();
    e.stopPropagation();
    $scope.matter.selected ? ($scope.matter.selected = false) : ($scope.matter.selected = true);
  };

  $scope.isClosed= function () {
    return $scope.matter.status === "closed";
  };

  $scope.closeMatter = function (e) {
    e.preventDefault();
    _closeMatter()
  };

  function _closeMatter () {
    $scope.matter.status="closed";
  }

  $scope.openMatter = function (e) {
    $scope.matter.status="open";
  };


  $scope.deleteMatter = function (e) {
    e.stopPropagation();
    if(confirm("Are you sure you want to delete this matter?")){
      _deleteMatter()
    };
  };

  function _deleteMatter () {
    index = $scope.client.matters.indexOf($scope.matter);
    $scope.client.matters.splice(index,1);
    mattersFactory.setFocusMatter(""); // clear focus matter
  }

  $scope.setFocusMatter = function(){
    mattersFactory.setFocusMatter($scope.matter);
  };

  $scope.toggleShowActions = function(e){
    e.stopPropagation();
    $scope.showActions = !$scope.showActions;
  }

  $scope.hideActions = function () {
    $scope.showActions = false;
  };

};

angular.module("app.matters").controller("matterItemCtrl",
  [
    "$scope", "$templateCache","$filter",
    "clientsFactory", "mattersFactory",
    matterItemCtrl
  ]
);