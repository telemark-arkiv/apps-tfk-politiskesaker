'use strict';

angular.module('appsTfkPolitiskesakerApp')
  .directive('kontakttabell', function () {
    return {
      templateUrl: 'views/kontakttabell.html',
      restrict: 'A',
      replace: true
    };
  });
