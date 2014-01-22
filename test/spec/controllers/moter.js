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

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
