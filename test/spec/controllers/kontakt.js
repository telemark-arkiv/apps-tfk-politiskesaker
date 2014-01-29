'use strict';

describe('Controller: KontaktCtrl', function () {

  // load the controller's module
  beforeEach(module('appsTfkPolitiskesakerApp'));

  var KontaktCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KontaktCtrl = $controller('KontaktCtrl', {
      $scope: scope
    });
  }));

  it('should attach an empty results-list to the scope', function () {
    expect(scope.results.length).toBe(0);
  });
});
