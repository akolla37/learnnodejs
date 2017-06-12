'use strict';

function Address() {
	this.street= 'street';
	this.city= 'city';
	this.state= 'state';
}

Address.prototype.getaddress= function(){
		return this.street + ', ' + this.city + ', ' + this.state;
}

function ContactInfo() {
	this.email= '';
	this.cell= '';
	this.work= '';
}

ContactInfo.prototype.getcontact= function(){
		return this.email + ', ' + this.cell + ', ' + this.work;
}

function Person(){
	this.firstname= '';
	this.lastname= '';
}

Person.prototype.greet = function(msg){
		return msg + ' ' + this.firstname + ' ' + this.lastname;
	}

var utils = require('util');
utils.inherits(Person, Address);

	
var john = new Person();
john['firstname'] = 'John';
john['lastname'] = 'Doe';


var anil = new Person();
anil['firstname'] = 'Anil';
anil['lastname'] = 'Kolla';


console.log(anil.greet('Hi'));
console.log(john.greet('Hello'));

anil['street'] = 'Leesa Dr';
anil['city'] = 'McKinney';
anil['state'] = 'TX';
console.log( anil.greet('Hey') + '\n Address: ' + anil.getaddress());

utils.inherits(Person, ContactInfo);
anil['email'] = 'abc@xyz.com';
anil['cell'] = '83889588634';
anil['work'] = '84885085844';

//getaddress() is no longer valide 
console.log( anil.greet('Hey') + '\n Contact Info :' + anil.getcontact());