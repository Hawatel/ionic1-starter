/*
  Router configuration
  All components have own router configuration file in components/<name>/<name>.config.js
  You can add all configuration in this file as well.
*/
export default /* @ngInject */ function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('app', {
    url: '/app',
    // what is an abstract attribute? The good explenation is here: http://stackoverflow.com/questions/33181532/why-give-an-abstract-true-state-a-url
    // in short abstract state is something like layer in rails structure
    // so menu.html is a container for the rest of states with the menuContent view
    abstract: true,
    template: require('../shared/views/sideMenu.view.html')
  });
  $urlRouterProvider.otherwise('/app/home');
};
