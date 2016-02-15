'use strict';

//Setting up route
angular.module('panel').config(['$stateProvider',
  function($stateProvider) {
    // Panel state routing
    $stateProvider
      .state('panel', {
        url: '/panel',
        templateUrl: 'modules/panel/client/views/panel.client.view.html'
      });
  }
]);
