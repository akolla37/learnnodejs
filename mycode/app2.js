function greet(msg){
  console.log("Hello, " + msg);
}

greet("Alex");

var greetalias = greet;

greetalias("Mattew");

function doubleFn(fn){
	fn("Tmp");
}

doubleFn(greetalias);

function rtnGreet(msg){
	return "Hi, " + msg;
}
var util = require("util");
util.log(rtnGreet("Tom"));

util.log(util.format("Hello, %s. You won $%d", "Anil", "3416"));

var calc = require("./misc");
util.log(calc.sum(15,5));
util.log(calc.substract(15,5));
util.log(calc.multiple(15,5));
util.log(calc.divide(15,5));

function extraFunc(fn, arg1, arg2){
	util.log(util.format("Calling fn %s with args(%d, %d) - ", fn, arg1, arg2) + fn(arg1, arg2));
}

extraFunc(calc.sum,100,10);
extraFunc(calc.sum,100,10);
extraFunc(calc.substract,100,10);
extraFunc(calc.multiple,100,10);
extraFunc(calc.divide,100,10);