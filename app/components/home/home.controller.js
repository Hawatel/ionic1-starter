import styles from './style.scss';

/**
  * Home Controller
  * @param {Object} $scope - controller scope
  * @param {Object} $ionicModal - The Modal is a content pane that can go over the user’s main view temporarily. Usually used for making a choice or editing an item.
  * @param {Object} $timeout - Angular's wrapper for window.setTimeout.
**/
export default /* @ngInject */ function($scope, $ionicModal, $timeout) {
  $scope.styles = styles; //styles are assigned to the component view by ng-class
}
