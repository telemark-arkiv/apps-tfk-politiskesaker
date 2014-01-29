'use strict';

describe('Controller: UtvalgetCtrl', function () {

  // load the controller's module
  beforeEach(module('appsTfkPolitiskesakerApp'));

  var UtvalgetCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UtvalgetCtrl = $controller('UtvalgetCtrl', {
      $scope: scope
    });
  }));

  it('should attach downloadBaseUrl to the scope', function () {
    expect(scope.downloadBaseUrl).toBe('http://ws.t-fk.no/download');
  });

  it('should attach an empty list utvalgsmoter to the scope', function () {
    expect(scope.utvalgsmoter.length).toBe(0);
  });

  it('should attach an empty kontaktperson to the scope', function () {
    expect(scope.kontaktperson.length).toBe(0);
  });

});
