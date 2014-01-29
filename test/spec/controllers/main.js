'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('appsTfkPolitiskesakerApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach an empty list called utvalgsListe to the scope', function () {
    expect(scope.utvalgsListe.length).toBe(0);
  });
});
