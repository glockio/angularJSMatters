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