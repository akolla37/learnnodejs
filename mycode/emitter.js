
function Emitter(){
	this.events = {};
}

Emitter.prototype.on = function(type, listener){
	this.events[type] = this.events[type] || []; //if exists, assign same or initialize emtpy
	this.events[type].push(listener);
}

Emitter.prototype.emit = function(type){
	if(this.events[type]){
		this.events[type].forEach(function(listener){
			listener();
		});
	}
}

module.exports = Emitter;