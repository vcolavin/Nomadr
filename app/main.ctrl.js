var myModule = angular.module('app', [])



myModule.controller("MainController", ['$scope', '$http', function($scope, $http){

    $scope.loggedInUser = "54c401f3a9a17b88f9000002" //ALFREDDDDDDDDDDD

// Get current user

    $http.get("http://nomadr-api.herokuapp.com/api/users/"+$scope.loggedInUser).success(function(response){

        $scope.currentUser = response

//PHOTOS
    //put real URL in here
    $http.get('http://nomadr-api.herokuapp.com/api/google_photo/'+$scope.loggedInUser).success(function(response){
        // console.log(response.photos.length)
        var maxNum = response.photos.length
        var randNum = (Math.floor(Math.random()*(maxNum - 0) + 0))
        $scope.bgImg = response.photos[randNum]
    })




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

    // switching out the login
    var self = this;
    self.tab = 'signup'
    self.open = function(tab) {
        self.tab = tab;
    }

    self.signUp = function() {
        $http.post("http://nomadr-api.herokuapp.com/api/users/", {
            name:       self.user.name,
            email:      self.user.email,
            city:       self.user.city,
            password:   self.user.password
        }).then(function(response){
            console.log(response)
            self.open('user')
            console.log("hey hey hey!")
        })
    }

}]);
