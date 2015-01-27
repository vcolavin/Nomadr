ourApp.controller("SignInController", ['$scope', '$http', '$route', function($scope, $http, $route){
    $scope.background = "http://static.pexels.com/wp-content/uploads/2015/01/clouds-flying-high-4103.jpeg"

    var self = this;

    $scope.signIn = function() {
          $http.get("http://nomadr-api.herokuapp.com/api/emails/" + self.email).success(function(response, body) {
              console.log("Sign In Success")
              console.log(response)
        });
    };

}]);
