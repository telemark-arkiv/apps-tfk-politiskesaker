'use strict';

angular.module('appsTfkPolitiskesakerApp')
  .directive('kontakttabell', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the kontakttabell directive');
      }
    };
  });
