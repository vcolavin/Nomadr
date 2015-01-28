ourApp.controller("SignInController", ['$scope', '$http', '$route', '$cookies', function($scope, $http, $route, $cookies){

    $scope.background = "http://static.pexels.com/wp-content/uploads/2015/01/clouds-flying-high-4103.jpeg"

    var self = this;

    $scope.signIn = function() {
          $http.get("http://nomadr-api.herokuapp.com/api/emails/" + self.email).success(function(response, body) {
              console.log("Sign In Success")
              console.log(response)
              $cookies.user_id = response._id;
              console.log($cookies.user_id + "HEEEEYYY")
        });
    };

}]);
