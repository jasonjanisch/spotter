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
    .when('/matches',
      {
        templateUrl: 'matches/matches.view.html',
        controller: 'matchesController',
        controllerAs: 'matches'
      })
    .otherwise(
      {
        templateUrl: '/queue/queue.view.html',
        controller: 'queueController',
        controllerAs: 'queue'
      });
}]);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey')
    .accentPalette('cyan');
});
