angular.module("app.matters").factory("clientsFactory", function($http){
  // factory is JS facade pattern. private methods go outside factory object
  var factory = {};
  var _clients = undefined;

  factory.getClients = function() {
    if(_clients){
      return _clients
    } else {
      return _clients = _initClientsWithMatters();

    };
  };

  factory.findClientByName = function(client_name){
    var client = _clients.filter(function(client){
      return client.client_name === client_name
    })[0];
    return client;
  };

  function _initClientsWithMatters () {
    return([
      {
        "client_name": "Floyd, Zeppelin, & Sabbath",
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
        "client_name": "Thompson, Hunter S. 00005",
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
        "client_name": "Marley Tosh Livingston",
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

      // Fake one
    ]);
  };

  return factory;

});