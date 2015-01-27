ourApp.controller("SignUpController", ['$scope', '$http', '$route', '$location', function($scope, $http, $route, $location){

  console.log("Controller")

    $scope.background = "http://static.pexels.com/wp-content/uploads/2015/01/clouds-flying-high-4103.jpeg"

    var self = this;

    $scope.signUp = function() {

        $http.post("http://nomadr-api.herokuapp.com/api/users/", {
            name:           self.user.name,
            email:          self.user.email,
            city:           self.user.city
        }).success(function(response, body) {
            console.log("Success!")
            $location.path('/home')
        });
    };
}]);
