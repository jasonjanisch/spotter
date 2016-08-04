var app = angular.module('spotter');

app.controller('queueController', queue);

queue.$inject = ['$http', '$mdBottomSheet', '$scope'];

function queue($http, $mdBottomSheet, $scope) {
  var vm = this;
  vm.counter = 0;

  vm.addMatch = function() {
    vm.counter++;

    var sendData = function() {
      var data = vm.match;
      console.log('logging var data')
      console.log(data);
      var config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      $http.post('/users/matches/testuser', data, config)
        .success(function(error, status) {
          console.log('logging success callback status');
          console.log(data);
        }).error(function(error, status) {
          console.log('logging error callback');
          console.log(error);
        });
    }
    sendData();
    vm.getUser();
  }
  vm.match;
  vm.getUser = function() {
    $http.get('http://localhost:8080/users/all')
      .then(function(response) {
        vm.match = response.data[vm.counter];
      });
  }
  vm.getUser();
  vm.openBottomSheet = function() {
    $mdBottomSheet.show({
      scope: $scope,
      template: '<md-bottom-sheet><md-list flex><h4>Bio</h4><p>{{queue.match.bio}}</p><h4>Favorite workouts</h4><p>Weight training, cardio, yoga, team sports</p><h4>Availability</h4><p>Sun, Tue, Thur, Sat</p><h4>Interests</h4><p>Gaming, music, snowboarding</p></md-bottom-sheet>'
    });
  }
}
