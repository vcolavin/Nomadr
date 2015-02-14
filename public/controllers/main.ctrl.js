ourApp.controller("MainController", ['$scope', '$http', '$route','$cookies', '$location', function($scope, $http, $route, $cookies, $location){

    console.log("COOKIE: "+$cookies.user_id)

    $scope.loggedInUser = $cookies.user_id
    $scope.bgImg
// set this http get to user:

// Get current user
    $http.get("http://your-app.herokuapp.com/api/users/"+$scope.loggedInUser).success(function(response){

        $scope.currentUser = response

        $scope.leaveDate = moment(new Date($scope.currentUser.departureDate)).format("MMMM Do, YYYY")
        $scope.fromNow = moment(new Date($scope.currentUser.departureDate)).fromNow()

        //Get Request to internal API
        $http.get('http://your-app.herokuapp.com/api/'+$scope.loggedInUser).success(function(response){
            console.log(response)
            $scope.response = response
         })

        // Get Request with validation
        $http.get('http://your-app.herokuapp.com/api/weather/'+$scope.loggedInUser).success(function(response){
            $scope.weather = response.weather
         })

        //Get request to external API
        $http.get('http://your-app.herokuapp.com/api/theirapi/'+$scope.loggedInUser).success(function(response){
            theirResponse
            $scope.theirResponse = theirResponse
         })

        // Get request with error handling
        $http.get('http://your-app.herokuapp.com/api/theirapi/'+$scope.loggedInUser).success(function(response){
            $scope.theirNeededResponse = response
        }).error(function() {
            console.log("response failed")
        })

    // Logout of website
    $scope.logout = function(){
        delete $cookies.user_id
        $location.path('/')
    }

}]);
