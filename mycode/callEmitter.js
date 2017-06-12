var Emitter = require("./emitter");

var emtr = new Emitter();

emtr.on('greet', function(){
	console.log("Hello there");
});

emtr.on('greet', function(){
	console.log("Bye Bye");
});

emtr.emit('greet');

emtr.on('welcome', function(){
	console.log("Welcome there");
});

emtr.on('welcome', function(){
	console.log("Welcome back");
});

emtr.emit('welcome');

emtr.on('greet', function(){
	console.log("Hola");
});

emtr.emit('greet');