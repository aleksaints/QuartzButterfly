(function() {
  'use strict';

  angular
    .module('quartzButterfly')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('dashboard', {
        url: '',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'dashboard'
      })
      .state('dashboard.main', {
        url: '/main',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/main');
  }

})();
