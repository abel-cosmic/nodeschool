function duckCount() {
    var argsArray = Array.from(arguments);
    var duckArguments = argsArray.filter(function(arg) {
      return Object.prototype.hasOwnProperty.call(arg, 'quack');
    });
    return duckArguments.length;
  }
  
  module.exports = duckCount;
  