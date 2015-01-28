ourApp.controller("SplashController", ['$scope', '$http', '$cookies', '$location', function($scope, $http, $cookies, $location){
  console.log($cookies.user_id)
  if ($cookies.user_id) {
    console.log("you were already logged in!")
    $location.path('/home')
  }
  $scope.title = "Nomadr"
  $scope.background = "http://static.pexels.com/wp-content/uploads/2015/01/clouds-flying-high-4103.jpeg"
  console.log("hey hey hey hey")
}]);
