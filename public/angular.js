var app = angular.module('spotter', ['ngMaterial', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/queue',
      {
        templateUrl: 'queue/queue.view.html',
        controller: 'queueController',
        controllerAs: 'queue'
      })
    .when('/profile',
      {
        templateUrl: 'profile/profile.view.html',
        controller: 'profileController',
        controllerAs: 'profile'
      })
    .otherwise(
      {
        templateUrl: '/queue/queue.view.html',
        controller: 'queueController',
        controllerAs: 'queue'
      });
}]);
