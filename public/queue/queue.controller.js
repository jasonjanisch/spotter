var app = angular.module('spotter');

app.controller('queueController', queue);

queue.$inject = ['$http', '$mdBottomSheet', '$scope'];

function queue($http, $mdBottomSheet, $scope) {
  var vm = this;
  vm.match = {};
  vm.getTestUser = function() {
    $http.get('http://localhost:8080/users/testuser')
      .then(function(response) {
        vm.match = response.data[0];
      });
  }
  vm.getTestUser();
  vm.test = 'Test';
  vm.openBottomSheet = function() {
    $mdBottomSheet.show({
      scope: $scope,
      template: '<md-bottom-sheet><md-list flex><h4>Test</h4><p>{{queue.test}}</p><h4>Favorite workouts</h4><p>Weight training, cardio, yoga, team sports</p><h4>Availability</h4><p>Sun, Tue, Thur, Sat</p><h4>Interests</h4><p>Gaming, music, snowboarding</p></md-bottom-sheet>'
    });
  }

}
