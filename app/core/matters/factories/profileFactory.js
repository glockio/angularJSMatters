

function ProfileFactory ($http, PROFILE_API_PATH) {
  factory = {};

  // factory.setProfiles = function (clients, callback) {
  //   factory._clients = clients;
  //   return _fetchRandomProfiles(callback);
  // }


  // function _fetchRandomProfiles (callback) {
  //   $http({
  //       url: PROFILE_API_PATH
  //       method: "GET",
  //       params: {results: factory.clients.length, gender: "Male"}
  //    })
  //   .then(_setProfilePhotos(response.data));
  // }

  // function _setProfilePhotos (random_users) {

  //   for(i=0; i < )
  // }

  return factory;


};


angular.module("app.matters").factory("profileFactory", ["$http", "PROFILE_API_PATH", ProfileFactory]);
