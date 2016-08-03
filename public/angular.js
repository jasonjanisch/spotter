var app = angular.module('spotter', ['ngMaterial', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/queue',
      {
        templateUrl: 'queue/queue.view.html',
        controller: 'queueController',
        controllerAs: 'queue'
      })
    .otherwise(
      {
        templateUrl: '/queue/queue.view.html',
        controller: 'queueController',
        controllerAs: 'queue'
      });
}]);

// app.controller('bottomSheetController', bottomSheetController);
// function bottomSheetController ($scope, $mdBottomSheet) {
//   $scope.openBottomSheet = function() {
//     $mdBottomSheet.show({
//       template: '<md-bottom-sheet><md-list flex><h4>Bio</h4><p>JavaScript enthusiast, eater of tacos, severely lacking flexibility.</p><h4>Favorite workouts</h4><p>Weight training, cardio, yoga, team sports</p><h4>Availability</h4><p>Sun, Tue, Thur, Sat</p><h4>Interests</h4><p>Gaming, music, snowboarding</p></md-bottom-sheet>'
//     });
//   };
// }
