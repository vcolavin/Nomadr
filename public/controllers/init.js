var myModule = angular.module('app', ['ngSanitize', 'ngRoute'])

myModule.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '../partials/splash.html'
      }).
      when('/signin', {
        templateUrl: '../partials/signin.html'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);
