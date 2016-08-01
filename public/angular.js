var app = angular.module('spotter', ['ngMaterial']);

app.controller('homeController', home);
function home() {
  var vm = this;
  vm.message = 'Welcome to spotter.';
}


app.controller('queueController', queue);
function queue() {
  var vm = this;
  // vm.matches = [
  //   { username: 'HardcodeSampleMan' },
  //   { username: 'AnotherHardcodeSampleBro' }
  // ];
  vm.match = {
    name: 'Jason Janisch',
    age: '24',
    bio: '2017 goals: change my legal name to Bowflex McProtein.'
  }
}
