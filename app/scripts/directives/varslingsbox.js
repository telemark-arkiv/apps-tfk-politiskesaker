'use strict';

angular.module('appsTfkPolitiskesakerApp')
  .directive('varslingsbox', function () {
    return {
      templateUrl: 'views/varslingsbox.html',
      restrict: 'A',
      replace: true
    };
  });
