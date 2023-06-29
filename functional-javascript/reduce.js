function countWords(inputWords) {
    return inputWords.reduce(function(acc, word) {
      if (acc[word]) {
        acc[word]++;
      } else {
        acc[word] = 1;
      }
      return acc;
    }, {});
  }
  
  module.exports = countWords;
  