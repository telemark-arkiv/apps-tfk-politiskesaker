'use strict';

angular.module('appsTfkPolitiskesakerApp')
  .controller('MoterCtrl', function ($scope, $routeParams, Api) {

    var
      moteid = $routeParams.moteid;

    $scope.mote = '';


    Api.getMotet(moteid).
      success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.mote = data.results;
        $scope.loading = false;
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        $scope.loading = false;
      });

  });
