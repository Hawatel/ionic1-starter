/* common filters */
export /* @ngInject */ function delString() {
  return function(input, strToDelete) {
    return input.replace(strToDelete, '');
  }
};
