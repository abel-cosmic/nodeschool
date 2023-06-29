module.exports = function arrayMap(arr, fn, thisArg) {
    return arr.reduce(function(result, item, index, array) {
      result.push(fn.call(thisArg, item, index, array));
      return result;
    }, []);
  };
  