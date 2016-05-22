/* common directives */
export /* @ngInject */ function imgPreLoading() {
  return {
    restrict: 'A',
    terminal: true,
    priority: 100,
    link: function (scope, element, attrs) {
        scope.default = attrs.defaultImage || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wEWEygNWiLqlwAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAAMSURBVAjXY/j//z8ABf4C/tzMWecAAAAASUVORK5CYII=";
        attrs.$observe('ngSrc', function () {
            var url = attrs.ngSrc;
            attrs.$set('src', scope.default);

            angular.element(new Image()).bind('load', function () {
                attrs.$set('src', url);
            }).bind('error', function () {
              if (attrs.fallbackImage != undefined) {
                  attrs.$set('src', attrs.fallbackImage);
              }
            }).attr('src', url);
        })
    }
  };
};
