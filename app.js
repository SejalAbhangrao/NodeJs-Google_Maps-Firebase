
var app = angular.module('myApp',
    [
        'ngRoute'
    ]
)


app.controller('myCtrl', function ($scope)
 {

   //console.log("loc : ",$scope.location);
  //  console.log("position : ",$scope.position);
  //  console.log("places : ",$scope.places);

  $scope.init = function(name)
  {
    //This function is sort of private constructor for controller
    $scope.name = name;
    //Based on passed argument you can make a call to resource
    //and initialize more objects
    //$resource.getMeBond(007)
    console.log("name : ", $scope.name);
  };

});
