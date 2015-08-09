function MattersCtrl ($rootScope, $scope, $templateCache, $filter, clientsFactory, mattersFactory) {

  $scope.clients = clientsFactory.getClients();
  $scope.focusMatter = mattersFactory.focusMatter;
  $scope.showPlaceHolder = true;
  $scope.hideClosedMatters = false;
  $scope.searchKeyWord = "";
  $scope.detailsVisible = false;

  $scope.showMatterDetails = function () {
    return $scope.detailsVisible ? "show-details" : ""
  }
  $scope.$on("focusMatterChanged", function () {
    $scope.detailsVisible = true;
    $scope.focusMatter = mattersFactory.getFocusMatter()
    $scope.detailsVisible  = !!$scope.focusMatter
  });

  $scope.keyWordFilter = function(keyWord){
    return(
      function (matter) {
        if(keyWord){
          return mattersFactory.matterHasKeyWord(matter,keyWord);
        } else {
          return true;
        };
      }
    );
  };

  $scope.mattersStatusFilter = function(){
    return(
      function (matter) {
        return $scope.hideClosedMatters ? matter.status !== "closed" : true
      }
    );
  };

  $scope.toggleHideClosedMatters = function () {
    $scope.hideClosedMatters = !$scope.hideClosedMatters
  };

  $scope.toggleAllMatters = function(){
    $scope.selectAllMatters = !$scope.selectAllMatters
    angular.forEach($scope.clients, function (client) {
      client.selectAllMatters =  $scope.selectAllMatters;
      $scope.toggleClientMatters(client)
    });
  };

  $scope.toggleClientMatters = function (client) {
    angular.forEach(client.matters, function (matter) {
      matter.selected = client.selectAllMatters
    });
  };

  $scope.toggleShowMassActionsMenu = function () {
    $scope.showMassActionsMenu =  !$scope.showMassActionsMenu
  }


  $scope.closeAllSelected = function () {
    console.log("closeAllSelectedMatters");
    $rootScope.$broadcast("closeAllSelectedMatters");
  }

  $scope.deleteAllSelected = function () {
    $rootScope.$broadcast("deleteAllSelectedMatters");
  }

};

angular.module("app.matters").controller("MattersCtrl",
  [
    "$rootScope", "$scope", "$templateCache", "$filter",
    "clientsFactory", "mattersFactory",MattersCtrl

  ]
);