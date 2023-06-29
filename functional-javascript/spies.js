function Spy(target, method) {
    var originalMethod = target[method];
    var count = 0;
  
    target[method] = function() {
      count++;
      return originalMethod.apply(this, arguments);
    };
  
    return {
      get count() {
        return count;
      }
    };
  }
  
  module.exports = Spy;

  /*
  function Spy(target, method) {
    const originalMethod = target[method];
    let result = {
        count : 0
    } 
    
  
    target[method] = function() {
      result.count++;
      return originalMethod.apply(this, arguments);
    };
  
    return result;
  }
  
  module.exports = Spy;
  
  */
  