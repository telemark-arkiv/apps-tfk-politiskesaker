'use strict';

angular.module('appsTfkPolitiskesakerApp')
  .controller('KontaktCtrl', function ($scope, $http) {
    $scope.results = [];

    $http({'method': 'GET', 'url': 'data/kontakt.json'}).
      success(function (data) {
        $scope.results = data;
      });
  });
