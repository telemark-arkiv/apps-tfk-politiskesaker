'use strict';

describe('Controller: SearchCtrl', function () {

  // load the controller's module
  beforeEach(module('appsTfkPolitiskesakerApp'));

  var SearchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SearchCtrl = $controller('SearchCtrl', {
      $scope: scope
    });
  }));

  it('should attach downloadBaseUrl to the scope', function () {
    expect(scope.downloadBaseUrl).toBe('http://ws.t-fk.no/download');
  });

  it('should attach an empty list saker to the scope', function () {
    expect(scope.saker.length).toBe(0);
  });

  it('should attach imSearching to the scope', function () {
    expect(scope.imSearching).toBe(true);
  });

});
