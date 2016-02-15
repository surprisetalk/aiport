'use strict';

angular.module('panel').directive('panel', [
  function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        // Panel directive logic
        // ...

        element.text('this is the panel directive');
      }
    };
  }
]);
