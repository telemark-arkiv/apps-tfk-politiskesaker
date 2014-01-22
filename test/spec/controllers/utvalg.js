'use strict';

describe('Controller: UtvalgCtrl', function () {

  // load the controller's module
  beforeEach(module('appsTfkPolitiskesakerApp'));

  var UtvalgCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UtvalgCtrl = $controller('UtvalgCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
