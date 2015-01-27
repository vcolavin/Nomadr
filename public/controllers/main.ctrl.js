ourApp.controller("MainController", ['$scope', '$http', '$route', function($scope, $http, $route){

    $scope.loggedInUser = "54c71155d63f2abdf7000001"

    $http.get('http://nomadr-api.herokuapp.com/api/google_photo/'+$scope.loggedInUser).success(function(response){
        var maxNum = response.photos.length
        var randNum = (Math.floor(Math.random()*(maxNum - 0) + 0))
        $scope.bgImg = response.photos[randNum]
    })

// set this http get to user:

// Get current user

    $http.get("http://nomadr-api.herokuapp.com/api/users/"+$scope.loggedInUser).success(function(response){

// Trying to turn city into query string so I can plug it into URL!!!! (can I use JQUERY here?)
        $scope.currentUser = response

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

// Get Wiki Info
    $http.get('http://nomadr-api.herokuapp.com/api/wiki/'+$scope.loggedInUser).success(function(response){
        $scope.wiki_data = response.wiki_content
        console.log($scope.wiki_data)
    })

// Get Time Info
    // $http.get('YOURtimeAPIURL')
    //from the response, set a $scope.time = response

//Page title
    $scope.title = "Nomadr";

    $scope.teammembers = "Vincent Colavin, Valerie Smith, Philip Riley, Devin Liu, Alfred Calayag";

    $scope.searchInput = '';

    // switching out the login
    var self = this;


}]);
