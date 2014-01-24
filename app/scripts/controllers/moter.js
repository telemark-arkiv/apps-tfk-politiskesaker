'use strict';

angular.module('appsTfkPolitiskesakerApp')
  .controller('MoterCtrl', function ($scope, $routeParams, Api) {

    var
      moteid = $routeParams.moteid;

    function getKontaktPerson(utvid) {
      Api.getKontaktPersonForUtvalg(utvid).
        success(function (data) {
          var
            personid = data.utvalg[utvid].kontaktperson;

          $scope.kontaktperson = data.kontaktperson[personid];
        }).
        error(function(data, status, header, config){
          console.log(status);
        });
    }

    $scope.mote = '';


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
