import styles from './style.scss';
import imgReddit from '../../assets/img/reddit.png';
import imgSpinner from '../../assets/img/spinner-hourglass.svg';

export default /* @ngInject */ function($scope, redditSrv) {
  $scope.styles = styles; //styles are assigned to the component view by ng-class
  $scope.img = {
    redditLogo: imgReddit,
    spinner: imgSpinner
  };
  $scope.stories = [];
  $scope.reddit = { channel: "all", browserMode: false };

  function loadStories(params, callback) {
    redditSrv.getStories(params, $scope.reddit.channel)
      .then((stories) => {
        callback(stories);
      }, (error) => {
        console.log(error);
      });
  };

  $scope.loadOlderStories = function() {
    var params = {};
    if($scope.stories.length > 0) {
      params['after'] = $scope.stories[$scope.stories.length -1].name;
    }
    loadStories(params, function(olderStories) {
      $scope.stories = $scope.stories.concat(olderStories);
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };

  /* load at the first time */
  $scope.loadNewStories = function() {
    loadStories({}, function(stories) {
      $scope.stories = stories;
    })
  }

  $scope.loadNewerStories = function() {
    if($scope.stories.length > 0) {
      var params = {'before': $scope.stories[0].name};
      loadStories(params, function(newerStories) {
        $scope.stories = newerStories.concat($scope.stories);
        $scope.$broadcast('scroll.refreshComplete');
      });
    }
  };

  $scope.goToLink = function (url) {
    var mode;
    if($scope.reddit.browserMode) { mode = "_system"; }
    else { mode = "_blank" }
    console.log(mode);
    window.open(url, mode);
  };

  $scope.hasTumbnail = function(tumbnail) {
    var regex = /^(http|https):\/\//i
    if(regex.test(tumbnail)) { return true; }
    else { return false; }
  };

}
