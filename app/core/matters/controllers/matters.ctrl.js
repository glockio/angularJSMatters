function MattersCtrl ($scope, $templateCache, $filter, clientsFactory, mattersFactory) {

  $scope.clients = clientsFactory.getClients();
  $scope.focusMatter = mattersFactory.focusMatter;
  $scope.showPlaceHolder = true;
  $scope.hideClosedMatters = false;
  $scope.searchKeyWord = "";

  $scope.setFocusMatter = function (matter) {
    $scope.showPlaceHolder = false;
    $scope.focusMatter = matter;
  }

  $scope.$on("focusMatterChanged", function () {
    $scope.focusMatter = mattersFactory.getFocusMatter()
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

  $scope.toggleAllMatters = function(){
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
};

angular.module("app.matters").controller("MattersCtrl",
  [
    "$scope", "$templateCache", "$filter",
    "clientsFactory", "mattersFactory",MattersCtrl

  ]
);