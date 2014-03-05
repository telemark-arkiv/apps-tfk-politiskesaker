'use strict';

angular.module('appsTfkPolitiskesakerApp')
  .controller('MoterCtrl', function ($scope, $routeParams, Api) {

    var
      moteid = $routeParams.moteid;

    $scope.downloadBaseUrl = 'http://ws.t-fk.no/download';
    $scope.mote = '';

    $scope.sortBySaksnr = function(sak) {
      if(isNaN(sak.saksnr)) {
        return sak.saksnr;
      } else {
        return parseInt(sak.saksnr);
      }
    };

    $scope.sortByDokType = function(dok) {
      if(isNaN(dok.type)) {
        return dok.type;
      } else {
        return parseInt(dok.type);
      }
    };

    function getKontaktPerson(utvid) {
      Api.getKontaktPersonForUtvalg(utvid).
        success(function (data) {
          var
            personid = data.utvalg[utvid].kontaktperson;

          $scope.kontaktperson = data.kontaktperson[personid];
        }).
        error(function(data, status, header, config){
          //console.log(status);
        });
    }

    Api.getMotet(moteid).
      success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.mote = data.results[0];
        $scope.loading = false;
        getKontaktPerson(data.results[0].utvid);
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        $scope.loading = false;
      });


  });
