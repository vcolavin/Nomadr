var ourApp = angular.module('ourApp', ['ngSanitize', 'ngRoute'])

ourApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '../partials/splash.html'
      }).
      when('/signin', {
        templateUrl: '../partials/signin.html'
      }).
      when('/signup', {
        templateUrl: '../partials/signup.html'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);
