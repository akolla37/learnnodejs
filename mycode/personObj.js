var Address = {
	street: '',
	city: '',
	state: '',
	getaddress: function(){
		return this.street + ', ' + this.city + ', ' + this.state;
	}
	
}

var Person = {
	firstname: '',
	lastname: '',
	greet: function(msg){
		return msg + ' ' + this.firstname + ' ' + this.lastname;
	}
}

var john = Object.create(Person);
john['firstname'] = 'John';
john['lastname'] = 'Doe';


var anil = Object.create(Person);
anil['firstname'] = 'Anil';
anil['lastname'] = 'Kolla';

console.log(anil.greet('Hi'));
console.log(john.greet('Hello'));

var fp = Object.create(Address);
fp['street'] = 'Leesa Dr';
fp['city'] = 'McKinney';
fp['state'] = 'TX';

console.log( fp.getaddress());