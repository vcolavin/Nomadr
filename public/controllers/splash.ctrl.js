
ourApp.controller("SplashController", ['$scope', '$http', '$cookies', '$location', function($scope, $http, $cookies, $location){
  console.log($cookies.user_id)
  if ($cookies.user_id && $cookies.user_id !== "logged out") {
    console.log($cookies.user_id)
    $location.path('/home')
  }
  $scope.title = "Your App"
  $scope.background = "http://imgur.com/wnVPHwN"
  console.log("hey splash")
}]);
