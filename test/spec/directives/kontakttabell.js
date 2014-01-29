'use strict';

describe('Directive: kontakttabell', function () {

  // load the directive's module
  beforeEach(module('appsTfkPolitiskesakerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<kontakttabell></kontakttabell>');
    element = $compile(element)(scope);
    expect(element.length).toBe(1);
  }));
});
