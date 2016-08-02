var app = angular.module('spotter', ['ngMaterial']);

app.controller('homeController', home);
function home() {
  var vm = this;
  vm.message = 'Welcome to spotter.';
}

app.controller('queueController', queue);
function queue() {
  var vm = this;
  vm.match = {
    name: 'Jason Janisch',
    age: '24',
    bio: '2017 goals: change my legal name to Bowflex McProtein.',
    details: [
      'detail-1',
      'detail-2',
      'detail-3'
    ]
  }
}

app.controller('bottomSheetController', bottomSheetController);
function bottomSheetController ($scope, $mdBottomSheet) {
  $scope.openBottomSheet = function() {
    $mdBottomSheet.show({
      template: '<md-bottom-sheet><md-list flex><h4>Bio</h4><p>JavaScript enthusiast, eater of tacos, severely lacking flexibility.</p><h4>Favorite workouts</h4><p>Weight training, cardio, yoga, team sports</p><h4>Availability</h4><p>Sun, Tue, Thur, Sat</p><h4>Interests</h4><p>Gaming, music, snowboarding</p></md-bottom-sheet>'
    });
  };
}
