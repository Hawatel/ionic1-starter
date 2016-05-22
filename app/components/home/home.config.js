export default /* @ngInject */ function($stateProvider) {
  $stateProvider.state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        template: require('./home.view.html'),
        controller: 'homeCtrl'
      }
    }
  });
}
