'use strict';

describe('Controller: SakerCtrl', function () {

  // load the controller's module
  beforeEach(module('appsTfkPolitiskesakerApp'));

  var SakerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SakerCtrl = $controller('SakerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
