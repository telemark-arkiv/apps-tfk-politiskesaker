'use strict';

describe('Directive: kontaktpersonbox', function () {

  // load the directive's module
  beforeEach(module('appsTfkPolitiskesakerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
    scope.kontaktperson = {
      name: 'Ole',
      mail: 'ole@ole.no',
      phone: '1234',
      mobile: '5678'
    };
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<kontaktpersonbox></kontaktpersonbox>');
    element = $compile(element)(scope);
    expect(element.length).toBe(1);
  }));
});
