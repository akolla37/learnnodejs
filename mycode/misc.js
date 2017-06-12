var sum = function(n1, n2){
	return n1+n2;
}

var sub = function(n1, n2){
	return n1-n2;
}

var multiple = function(n1, n2){
	return n1*n2;
}

var div = function(n1, n2){
	return n1/n2;
}

module.exports = {
	sum: sum,
	multiple: multiple,
	substract: sub,
	divide: div,
};