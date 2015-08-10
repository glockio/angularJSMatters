
//App modules

angular.module("templates", []);// used for angular template cache


angular.module('app', ["app.matters", 'ui.router', "templates"])
  .config(
    ['$stateProvider', '$urlRouterProvider', function ($stateProvider,  $urlRouterProvider) {

      $urlRouterProvider
        .otherwise("/") // Handle unmet urls
        .when('/', '/matters'); // set root url

      $stateProvider
        .state('ladning', {
          url: "/ladning",
          template: "<h1>Landing page View</h1>"
        })
    }]
  )



angular.module("app.matters", ["ui.router", "templates"])

  .config(
    ['$stateProvider', '$urlRouterProvider', function ($stateProvider,  $urlRouterProvider) {

      $stateProvider
        .state('matters', {
          url: "/matters",
          templateUrl: "core/matters/matters.html",
          controller: "MattersCtrl"
        });
    }]
  )
  .constant('PROFILE_API_PATH', 'https://randomuser.me/api/')




  // .controller('MattersItemCtrl', ["$scope", "$templateCache",  '$stateParams', function ($scope, $templateCache, $stateParams ) {

  //   console.log($stateParams);

  // }]);
function clientItemCtrl ($scope, $templateCache, $filter, clientsFactory, mattersFactory) {


};

angular.module("app.matters").controller("clientItemCtrl",

  [
    "$scope", "$templateCache","$filter",
    "clientsFactory", "mattersFactory",
    clientItemCtrl
  ]
);
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
angular.module("app.matters").factory("clientsFactory", function($http){
  // factory is JS facade pattern. private methods go outside factory object

  var factory = {};
  var _clients = undefined;

  factory.getClients = function() {
    // caching clients in this case is pointless
    // but getClients would typically be an http request where I could cache response
    if(_clients){
      return _clients
    } else {
      return _clients = _initClientsWithMatters();

    };
  };

  function _initClientsWithMatters () {
    return([
      {
        "client_name": "Thompson, Hunter S. 00005",
        avatar_url: "http://www.leftways.com/wp-content/uploads/2014/06/hunter-thompson-our-kitchen-sink.jpg",
        "matters": [
          {
            "id": 2,
            "number": "00003 - Thompson, Hunter S.",
            "description": "Ut enim ad minim veniam. Ut enim ad minim veniam, Ut enim ad minim veniam.",
            "status": "open"
          },
          {
            "id": 3,
            "number": "00004 - Thompson, Hunter S.",
            "description": "Ut enim ad minim veniam, quis nostrud exercitation. ",
            "status": "open"
          }
        ]
      },
      {
        "client_name": "Floyd, Zeppelin, & Sabbath",
         avatar_url: "http://cps-static.rovicorp.com/3/JPG_400/MI0003/680/MI0003680454.jpg?partner=allrovi.com",
        "matters": [
          {
            "id": 0,
            "number": "00001 - Floyd, Zeppelin, & Sabbath",
            "description": "Ut enim ad minim veniam. Ut enim ad minim veniam, Ut enim ad minim veniam.",
            "status": "open"
          },
          {
            "id": 1,
            "number": "00002 - Floyd, Zeppelin, & Sabbath",
            "description": "Ut enim ad minim veniam, quis nostrud exercitation. ",
            "status": "open"
          }
        ]
      },

      {
        "client_name": "Marley Tosh Livingston",
        avatar_url: "http://cps-static.rovicorp.com/3/JPG_400/MI0003/146/MI0003146038.jpg?partner=allrovi.com",
        "matters": [
          {
            "id": 4,
            "number": "00005 - Marley Tosh Livingston",
            "description": "Ut enim ad minim veniam. Ut enim ad minim veniam, Ut enim ad minim veniam.",
            "status": "open"
          },
          {
            "id": 5,
            "number": "00016 - Marley Tosh Livingston",
            "description": "Ut enim ad minim veniam, quis nostrud exercitation. ",
            "status": "open"
          }
        ]
      },
      {
        "client_name": "Watterson, Bill",
        avatar_url: "http://2.bp.blogspot.com/-9VIdOZFBlek/Uiy9wW1X5PI/AAAAAAAACI0/JvHyPVhWQjw/s1600/watterson.jpg",
        "matters": [
          {
            "id": 4,
            "number": "00005 - Watterson, Bill",
            "description": "Ut enim ad minim veniam. Ut enim ad minim veniam, Ut enim ad minim veniam.",
            "status": "open"
          },
          {
            "id": 5,
            "number": "00016 - Watterson, Bill",
            "description": "Ut enim ad minim veniam, quis nostrud exercitation. ",
            "status": "closed"
          }
        ]
      }
    ]);
  };

  return factory;

});


function mattersFactory($rootScope) {
  factory = {};

  var _searchableMatterProperties = ["description","status", "number"]

  var _selectedMatters = [];

  factory.matterHasKeyWord = function (matter, keyword) {
    var regex = new RegExp(".*" + keyword + ".*", "i");
    var foundMatch = false;
    for (i = 0; i < _searchableMatterProperties.length; i++) {
      var property = _searchableMatterProperties[i]
      if (regex.test(matter[property])) {
        foundMatch = true;
        break;
      }
    }
    return foundMatch;
  };

  factory.setFocusMatter = function(matter){
    factory.focusMatter = matter;
    $rootScope.$broadcast("focusMatterChanged");
  };


  factory.getFocusMatter = function(){
    return factory.focusMatter;
  };


  return factory;


};


angular.module("app.matters").factory("mattersFactory", ["$rootScope", mattersFactory]);

angular.module("app.matters").directive('avatar', function() {
  return {
    restrict: 'E',
    scope: {
      imageSource: '@',
      test: "@"

    },
    templateUrl: "core/matters/directives/avatar/avatar.html",
    controller: ['$scope', '$templateCache', function($scope, $templateCache) {

    }]

  }
});
angular.module("app").directive('textDivider', function() {
  return {
    restrict: 'EA',
    scope: {
      collection: '=',
      pluralName: "@",
      singleName: "@"
    },
    templateUrl: "core/matters/directives/text_divider/text_divider.html",
    controller: ['$scope', '$templateCache', function($scope, $templateCache) {
      // console.log($scope)
    }]
  }
});
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