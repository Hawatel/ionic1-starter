import styles from './style.scss';

export default /* @ngInject */ function($scope, $ionicModal, $timeout) {
  $scope.styles = styles; //styles are assigned to the component view by ng-class
}
