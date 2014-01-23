'use strict';

angular.module('appsTfkPolitiskesakerApp')
  .controller('SearchCtrl', function ($scope, $routeParams, Api) {
    var
      query = $routeParams.query;

    $scope.saker = [];
    $scope.imSearching = true;

    Api.search(query).
     success(function(data){
        $scope.saker = data;
        $scope.imSearching = false;
     }).
     error(function(data, status, header, config){
        $scope.imSearching = false;
        console.log(status);
     });
  });
