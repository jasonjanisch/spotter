var app = angular.module('spotter');

app.controller('matchesController', matches);

matches.$inject = ['$http'];

function matches($http) {
  var vm = this;
  vm.myMatches = [];
  vm.getMatches = function() {
    $http.get('http://localhost:8080/users/You')
      .then(function(response) {
        vm.myMatches = response.data[0].matches;
      });
  }
  vm.getMatches();
}
