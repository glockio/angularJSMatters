
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