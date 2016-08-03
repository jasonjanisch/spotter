var app = angular.module('spotter');

app.controller('queueController', queue);

queue.$inject = ['$http'];

function queue($http) {
  var vm = this;
  vm.match = {};
  vm.getTestUser = function() {
    $http.get('http://localhost:8080/users/testuser')
      .then(function(response) {
        vm.match = response.data[0];
      });
  }
  vm.getTestUser();
}
