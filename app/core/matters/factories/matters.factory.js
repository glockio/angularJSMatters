

function mattersFactory() {
  factory = {};

  var _searchableMatterProperties = ["description","status", "number"]


  factory.matterHasKeyWord = function (matter, keyword) {
    var regex = new RegExp(".*" + keyword + ".*", "i");
    var foundMatch = false;
    for (i = 0; i < _searchableMatterProperties.length; i++) {
      var property = _searchableMatterProperties[i]
      console.log(property)
      console.log(matter[property])
      if (regex.test(matter[property])) {
        foundMatch = true;
        break;
      }
    }
    return foundMatch;
  };


  return factory;


};


angular.module("app.matters").factory("mattersFactory", [mattersFactory]);
