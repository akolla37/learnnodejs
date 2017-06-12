var Emitter = require("events");
var eventConfig = require("./eventConfig").eventConsts;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function(){
	console.log("Hello there");
});

emtr.on(eventConfig.GREET, function(){
	console.log("Bye Bye");
});

emtr.emit(eventConfig.GREET);

emtr.on(eventConfig.WELCOME, function(){
	console.log("Welcome there");
});

emtr.on(eventConfig.WELCOME, function(){
	console.log("Welcome back");
});

emtr.emit(eventConfig.WELCOME);

emtr.on(eventConfig.GREET, function(){
	console.log("Hola");
});

emtr.emit(eventConfig.GREET);