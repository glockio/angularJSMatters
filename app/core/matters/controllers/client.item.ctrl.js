function clientItemCtrl ($scope, $templateCache, $filter, clientsFactory, mattersFactory) {


};

angular.module("app.matters").controller("clientItemCtrl",

  [
    "$scope", "$templateCache","$filter",
    "clientsFactory", "mattersFactory",
    clientItemCtrl
  ]
);