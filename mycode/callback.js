function greet(callback){
	console.log('Hello!');
	var data = {
			name: 'some name'
	};
	callback(data);
}

greet(function(data){
	console.log("Callback is invoked " + data);
	}
);

greet(function(data){
	console.log("Different Callback is invoked " + data.name);
	}
);