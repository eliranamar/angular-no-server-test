app.controller('namesCtrl', function ($scope, namesFactory) {
  $scope.names = namesFactory.names;
})