// angular.module("app").directive('clientMattersList', function() {
//   // var url = "http://api.openweathermap.org/data/2.5/forecast/daily?mode=json&units=imperial&cnt=14&callback=JSON_CALLBACK&q=";
//   return {
//     restrict: 'EA',
//     require: '^clients',
//     scope: {
//       clients: '='
//     },
//     templateUrl: "core/matters/directives/client_matters_list/client_matters_list.html"
//     controller: ['$scope', '$http', function($scope, $http) {
//       $scope.getTemp = function(city) {
//         $http({
//           method: 'JSONP',
//           url: url + city
//         }).success(function(data) {
//           var weather = [];
//           angular.forEach(data.list, function(value){
//             weather.push(value);
//           });
//           $scope.weather = weather;
//         });
//       }
//     }],
//     link: function(scope, iElement, iAttrs, ctrl) {
//       scope.getTemp(iAttrs.ngCity);
//       scope.$watch('weather', function(newVal) {
//         // the `$watch` function will fire even if the
//         // weather property is undefined, so we'll
//         // check for it
//         if (newVal) {
//           var highs = [],
//               width   = 200,
//               height  = 80;

//           angular.forEach(scope.weather, function(value){
//             highs.push(value.temp.max);
//           });
//           // chart
//         }
//       });
//     }
//   }
// });