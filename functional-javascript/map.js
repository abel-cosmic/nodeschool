function doubleAll (numbers){
	var result = [];
	numbers.map(function (number){
		return result.push(number *2);
	});
	return result;
}
module.exports = doubleAll