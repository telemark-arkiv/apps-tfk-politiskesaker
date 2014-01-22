'use strict';

angular.module('appsTfkPolitiskesakerApp')
  .controller('MainCtrl', function ($scope, Api) {

    $scope.utvalgsListe = [];

    Api.getUtvalg().
      success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.utvalgsListe = data.results;
        $scope.loading = false;
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        $scope.loading = false;
      });

  });
