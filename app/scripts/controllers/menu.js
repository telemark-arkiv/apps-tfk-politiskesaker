'use strict';

angular.module('appsTfkPolitiskesakerApp')
  .controller('MenuCtrl', function ($scope, $location) {

    $scope.thispath = '';

    $scope.submit = function () {
      var query = $scope.querystring;

      $location.path('/search/' + query);

    };

    $scope.$watch(function () {
        return $location.path();
      }, function () {
        $scope.thispath = $location.path();
      }, true
    );

  });
