'use strict';

angular.module('appsTfkPolitiskesakerApp')
  .directive('kontaktpersonbox', function () {
    return {
      templateUrl: 'views/kontaktpersonbox.html',
      restrict: 'A',
      replace: true
    };
  });
