function  MattersCtrl ($scope, $templateCache, $filter, clientsFactory, mattersFactory) {

  $scope.clients = clientsFactory.getClients();
  $scope.focusMatter = undefined;
  $scope.showPlaceHolder = true;
  $scope.hideClosedMatters = true;
  $scope.searchKeyWord = "";




  $scope.setFocusMatter = function (matter) {
    $scope.showPlaceHolder = false;
    $scope.focusMatter = matter;
  }

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

  $scope.displayMatter = function (matter) {
    return $scope.hideClosedMatters ? matter.status !== "closed" : true
  };


  $scope.closeMatter = function (client, matter) {
    matter.status="closed";
    console.log($scope);
  };

  $scope.deleteMatter = function (client, matter) {
    index = client.matters.indexOf(matter);
    client.matters.splice(index,1);
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