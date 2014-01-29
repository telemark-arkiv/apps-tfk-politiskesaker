'use strict';

describe('Controller: MoterCtrl', function () {

  // load the controller's module
  beforeEach(module('appsTfkPolitiskesakerApp'));

  var MoterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MoterCtrl = $controller('MoterCtrl', {
      $scope: scope
    });
  }));

  it('should attach mote to the scope', function () {
    expect(scope.mote.length).toBe(0);
  });

  it('should attach downloadBaseUrl to the scope', function () {
    expect(scope.downloadBaseUrl).toBe('http://ws.t-fk.no/download');
  });
});
