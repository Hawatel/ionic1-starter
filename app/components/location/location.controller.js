import styles from './style.scss';

export default /* @ngInject */ function($scope, GoogleMaps, CONFIG) {
  $scope.styles = styles; //styles are assigned to the component view by ng-class
  GoogleMaps.init(CONFIG.googleMaps);  
}
