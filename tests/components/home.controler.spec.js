import 'components/home';

describe('homeCtrl', () => {
  var scope;

  beforeEach(angular.mock.module('ionic'));
  beforeEach(angular.mock.module('ui.router'));
  beforeEach(angular.mock.module('app.home'));

  beforeEach(inject(($rootScope, $controller) => {
    scope = $rootScope.$new();
    $controller('homeCtrl', {$scope: scope});
  }));

  it('styles should exist', () => {
    expect(scope.styles).to.be.a('Object');
  });

})
