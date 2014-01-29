'use strict';

angular.module('appsTfkPolitiskesakerApp')
  .controller('SearchCtrl', function ($scope, $routeParams, Api) {
    var
      query = $routeParams.query;

    $scope.downloadBaseUrl = 'http://ws.t-fk.no/download';
    $scope.saker = [];
    $scope.imSearching = true;

    Api.searchSaker(query).
     success(function(data){
        $scope.saker = data.results;
        $scope.imSearching = false;
      }).
     error(function(data, status, header, config){
        $scope.imSearching = false;
        console.log(status);
      });
  });
