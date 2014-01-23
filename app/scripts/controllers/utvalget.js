'use strict';

angular.module('appsTfkPolitiskesakerApp')
  .controller('UtvalgetCtrl', function ($scope, $routeParams, $http, Api) {

    var
      utvid = $routeParams.utvid;

    $scope.utvalgsmoter = [];
    $scope.kontaktperson = '';

    Api.getUtvalget(utvid).
      success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.utvalgsmoter = data.results;
        $scope.loading = false;
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        $scope.loading = false;
      });

    $http({'method': 'GET', 'url': 'data/utvalgskontakt.json'}).
      success(function (data) {
        var
          personid = data.utvalg[utvid].kontaktperson;

        $scope.kontaktperson = data.kontaktperson[personid];
      });

  });
