
var slice = Array.prototype.slice;

function logger(namespace) {
    return function() {
      var args = slice.call(arguments);
      var message = [namespace].concat(args);
      console.log.apply(console, message);
    };
  }
  
  module.exports = logger;
  