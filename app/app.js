
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

