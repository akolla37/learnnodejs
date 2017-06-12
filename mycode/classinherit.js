'use strict';

class  ContactInfo {
	constructor(){
		this.email= 'email';
		this.cell= 'cell';
		this.work= 'work';
	
	}
	//multiple constructor not supported
	/* constructor(email, cell, work){
		this.email= email;
		this.cell= cell;
		this.work= work;
	} */
	
	getContact(){
		return this.email + ', ' + this.cell + ', ' + this.work;
	}
}

class Address extends ContactInfo{
	constructor(){
		super();
		this.street = 'street';
		this.city = 'city';
		this.state = 'state';
	}
	/*
	constructor(street, city, state){
		this.street= street;
		this.city= city;
		this.state= state;
	}	 */
	
	getAddress(){
		return this.street + ', ' + this.city + ', ' + this.state + '\nContact Info: ' + this.getContact();
	}
}

class Person extends Address{
	constructor(firstname, lastname){
		super();
		this.firstname = firstname;
		this.lastname = lastname;
	}
	greet(msg){
		return msg + ' ' + this.firstname + ' ' + this.lastname + '\n Address: ' + this.getAddress();
	}
}

var john = new Person('John','Doe');
console.log(john.greet('Hello'));

var anil = new Person('Anil','Kolla');
anil['city'] = 'McKinney';
anil['email'] = 'abc@abc.com';

console.log(anil.greet('Hi'));