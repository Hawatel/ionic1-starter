export default /* @ngInject */ function($stateProvider) {
  $stateProvider.state('app.location', {
    url: '/location',
    views: {
      'menuContent': {
        template: require('./location.view.html'),
        controller: 'locationCtrl'
      }
    }
  });
}
