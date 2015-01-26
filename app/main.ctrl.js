var myModule = angular.module('app', [])


myModule.controller("MainController", ['$scope', '$http', function($scope, $http){
    var self = this;

//Initial page load get users
    self.fetchCoords = function() {
      console.log(self.place);
      // var request = 'https://maps.googleapis.com/maps/api/geocode/json?address=+San+Francisco,+CA&key=API_KEY';


      // testJson = $http.get(request);
      // console.log(testJson)

    geocoder.geocode({'address': self.place}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          var address = results[0].geometry.location;
          console.log(address);
        } else {
          alert('Geocode was not successful for the following reason: '
            + status);
        }
    })
      // return $http.get().then(
      //   function(response){
      //     console.log(response.data)
      //     // parselatLg data
      //   })
    };

    // $http.get("http://nomadr-api.herokuapp.com/api/users").success(function(response){
    //     console.log(response)
    //     $scope.users = response
    // }).error(function(){
    //     $scope.quote =  "Request Failed!"
    // })
    $scope.bgImg = 'http://www.mrwallpaper.com/wallpapers/Paris-City-Lights.jpg';


    $scope.loggedInUser = "54c401f3a9a17b88f9000002"

// Get current user

    $http.get("http://nomadr-api.herokuapp.com/api/users/"+$scope.loggedInUser).success(function(response){

        $scope.currentUser = response

// Trying to turn city into query string so I can plug it into URL!!!! (can I use JQUERY here?)


        $http.get('http://api.openweathermap.org/data/2.5/weather?q='+$scope.currentUser.city).success(function(response){
            $scope.weather = response
        })

    }).error(function(){
        $scope.quote =  "Request Failed!"
    })

//Change these GETs after change from localhost?

//Get
    // $http.get('http://api.openweathermap.org/data/2.5/weather?q=disneyland').success(function(response){
    //     console.log(response)
    //     $scope.weather = response
    // })

    $scope.farenheit = function(kelvin) {
        var num = 1.8 * (kelvin - 273) + 32
        return num.toFixed()
    }

//Page title
    $scope.title = "Nomadr";

    $scope.teammembers = "Vincent Colavin, Valerie Smith, Philip Riley, Devin Liu, Alfred Calayag";

    $scope.searchInput = '';

}]);
