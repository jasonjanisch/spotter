var app = angular.module('spotter', ['ngMaterial']);

app.controller('homeController', home);
function home() {
  var vm = this;
  vm.message = 'Welcome to spotter.';
}


app.controller('queueController', queue);
function queue() {
  var vm = this;
  vm.matches = [
    { username: 'HardcodeSampleMan' },
    { username: 'AnotherHardcodeSampleBro' }
  ];
  vm.message = 'Queue message!'
}
