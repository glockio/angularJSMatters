

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
