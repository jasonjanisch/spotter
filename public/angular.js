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
    .when('/editor',
      {
        templateUrl: 'editor/editor.view.html',
        controller: 'editorController',
        controllerAs: 'editor'
      })
    .otherwise(
      {
        templateUrl: '/queue/queue.view.html',
        controller: 'queueController',
        controllerAs: 'queue'
      });
}]);
