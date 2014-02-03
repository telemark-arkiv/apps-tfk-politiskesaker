'use strict';

angular.module('appsTfkPolitiskesakerApp')
  .controller('UtvalgetCtrl', function ($scope, $routeParams, Api) {

    var
      utvid = $routeParams.utvid;

    $scope.downloadBaseUrl = 'http://ws.t-fk.no/download';
    $scope.utvalgsmoter = [];
    $scope.kontaktperson = '';

    $scope.sortByMoteid = function(mote) {
      if(isNaN(mote.moteid)) {
        return mote.moteid;
      } else {
        return parseInt(mote.moteid);
      }
    }

    Api.getUtvalget(utvid).
      success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.utvalg = data.results[0];
        $scope.loading = false;
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        $scope.loading = false;
      });

    Api.getKontaktPersonForUtvalg(utvid).
      success(function (data) {
        var
          personid = data.utvalg[utvid].kontaktperson;

        $scope.kontaktperson = data.kontaktperson[personid];
      }).
      error(function(data, status, header, config){
        console.log(status);
      });

  });
