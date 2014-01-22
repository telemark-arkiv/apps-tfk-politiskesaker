'use strict';

angular.module('appsTfkPolitiskesakerApp')
  .controller('MoterCtrl', function ($scope, $routeParams, Api) {

    var
      moteid = $routeParams.moteid;

    $scope.mote = Api.getMotet(moteid);

  });
