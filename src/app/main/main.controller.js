(function() {
  'use strict';

  angular
    .module('quartzButterfly')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;
    vm.mmenu = {};
    vm.mmenu.title = "Welcome!";
  }
})();
