var app = angular.module('spotter');

app.controller('editorController', editor);

editor.$inject = ['$http', '$scope'];

function editor($http, $scope) {
  var vm = this;
  vm.updateInfo = function(myAge, myBio, myWorkouts, myAvailability, myInterests) {
    var data = {
      age: myAge,
      bio: myBio,
      workouts: myWorkouts,
      availability: myAvailability,
      interests: myInterests
    }
    var config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    $http.put('/users/You', data, config)
      .success(function(error, status) {
        console.log(status);
      }).error(function(error, status) {
        console.log(error);
      });
  }
}
