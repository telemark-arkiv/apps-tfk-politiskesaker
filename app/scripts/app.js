'use strict';

angular.module('appsTfkPolitiskesakerApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/utvalg', {
        templateUrl: 'views/utvalg.html',
        controller: 'UtvalgCtrl'
      })
      .when('/utvalg/:utvid', {
        templateUrl: 'views/utvalget.html',
        controller: 'UtvalgetCtrl'
      })
      .when('/personvern', {
        templateUrl: 'views/personvern.html',
        controller: 'PersonvernCtrl'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .when('/moter/:moteid', {
        templateUrl: 'views/moter.html',
        controller: 'MoterCtrl'
      })
      .when('/saker/:sakid', {
        templateUrl: 'views/saker.html',
        controller: 'SakerCtrl'
      })
      .when('/kontakt', {
        templateUrl: 'views/kontakt.html',
        controller: 'KontaktCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
