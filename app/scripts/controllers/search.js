'use strict';

angular.module('appsTfkPolitiskesakerApp')
  .controller('SearchCtrl', function ($scope, $routeParams, Api) {
    var
      query = $routeParams.query;

    $scope.saker = [];

    $scope.saker = Api.search(query);


  });
