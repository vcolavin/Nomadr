var myModule = angular.module('app', ['ngSanitize'])



myModule.controller("MainController", ['$scope', '$http', function($scope, $http){

    $scope.loggedInUser = "54c401f3a9a17b88f9000002" //ALFREDDDDDDDDDDD

    $http.get('http://localhost:9090/api/google_photo/'+$scope.loggedInUser).success(function(response){
        var maxNum = response.photos.length
        var randNum = (Math.floor(Math.random()*(maxNum - 0) + 0))
        $scope.bgImg = response.photos[randNum]
    })
    // $scope.bgImg = 'http://www.mrwallpaper.com/wallpapers/Paris-City-Lights.jpg';

// set this http get to user:



// http://nomadr-api.herokuapp.com
// Get current user

    $http.get("http://localhost:9090/api/users/"+$scope.loggedInUser).success(function(response){

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

    $http.get('http://nomadr-api.herokuapp.com/api/wiki/'+$scope.loggedInUser).success(function(response){
        $scope.wiki_data = response.wiki_content
        console.log($scope.wiki_data)
    })






//Page title
    $scope.title = "Nomadr";

    $scope.teammembers = "Vincent Colavin, Valerie Smith, Philip Riley, Devin Liu, Alfred Calayag";

    $scope.searchInput = '';

    // switching out the login
    var self = this;
    $scope.tab = 'signup'
    self.open = function(tab) {
        self.tab = tab;
    }

    $scope.signUp = function() {
        var coordinates = self.fetchCoords();
        $http.post("http://localhost:9090/api/users/", {
            name:       self.user.name,
            email:      self.user.email,
            city:       self.user.city,
            coordinates: coordinates
        }).success(function(response, body) {
            console.log(response)
            // self.open('user')
            console.log("post done!")
        });
    };

    self.fetchCoords = function() {
      // console.log(self.user.city);
        geocoder.geocode({'address': self.user.city}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              var coords = results[0].geometry.location;
              // console.log(coords['k']);
              // console.log(coords['D']);
              var latLg = ''+coords['k']+','+coords['D']+''
              return latLg
              console.log(latLg)
            } else {
              alert('Geocode was not successful for the following reason: '
                + status);
            }
        })
    };



}]);
