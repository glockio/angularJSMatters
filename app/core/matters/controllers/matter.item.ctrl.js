function MattersItemCtrl ($scope, $templateCache, $filter, clientsFactory, mattersFactory) {

  $scope.testing="here";
};

angular.module("app.matters").controller("MattersItemCtrl",

  [
    "$scope", "$templateCache","$filter",
    "clientsFactory", "mattersFactory",
    MattersItemCtrl
  ]
);