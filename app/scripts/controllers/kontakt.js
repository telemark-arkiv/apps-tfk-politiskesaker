'use strict';

angular.module('appsTfkPolitiskesakerApp')
  .controller('KontaktCtrl', function ($scope, Api) {
    $scope.results = [];

    Api.getKontaktPersoner().
      success(function (data) {
        $scope.results = data;
      }).
      error(function(data, status, header, config){
        console.log(status);
      });

  });
