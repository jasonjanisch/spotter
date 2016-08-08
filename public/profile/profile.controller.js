var app = angular.module('spotter');

app.controller('profileController', profile);

queue.$inject = ['$http', '$mdBottomSheet', '$scope'];

function profile($http, $mdBottomSheet, $scope) {
  var vm = this;

  vm.myProfile;
  vm.getProfile = function() {
    $http.get('http://localhost:8080/users/You')
      .then(function(response) {
        vm.myProfile = response.data[0];
      });
  }
  vm.getProfile();
  vm.openBottomSheet = function() {
    $mdBottomSheet.show({
      scope: $scope,
      template: '<md-bottom-sheet><md-list flex><h4>Bio</h4><p>{{profile.myProfile.bio}}</p><h4>Favorite workouts</h4><p>{{profile.myProfile.workouts}}</p><h4>Availability</h4><p>{{profile.myProfile.availability}}</p><h4>Interests</h4><p>{{profile.myProfile.interests}}</p></md-bottom-sheet>'
    });
  }
}
