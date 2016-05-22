export default /* @ngInject */ function($http, $q, CONFIG) {
  let apiUrl = CONFIG.reddit.apiUrl;

    this.getStories = (params, channel) => {
      var deferred = $q.defer();
      $http.get(apiUrl + '/r/' + channel + '/new/.json', {params: params})
        .then((response) => {
          var stories = [];
          angular.forEach(response.data.data.children, (child) => {
            stories.push(child.data);
          });
          deferred.resolve(stories);
        }, (error) => {
          deferred.reject(error);
        });

        return deferred.promise;
    };
};
