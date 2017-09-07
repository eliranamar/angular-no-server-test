app.controller('playerCtrl', function ($scope) {
  $scope.brother = "Jon Snow";
  $scope.bound = "Voracious"

  $scope.showTwoWay = function () {
    console.log($scope.bound);
    $scope.bound = "Not so voracious"
  }

  $scope.getRand = function(){
    $scope.rand = Math.floor(Math.random()*100);
  };
});