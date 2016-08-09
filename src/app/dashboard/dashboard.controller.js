(function() {
  'use strict';

  angular
    .module('quartzButterfly')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController() {
    var vm = this;
    vm.side = {};
    vm.side.urls = [{'url':'/main','value':'main'},{'url':'hoas.dfme2asd','value':'Hasdfome2'}];
  }
})();
