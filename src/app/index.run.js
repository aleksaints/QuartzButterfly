(function() {
  'use strict';

  angular
    .module('quartzButterfly')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
