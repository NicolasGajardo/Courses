var Emitter = require('./emitter');

function Person (name){
	this.name = name;
}

var michael = new Person('Michael');

var emtr = new Emitter();

emtr.on('greet', function() {
	console.log('Somewhere, someone said hello.');
});

emtr.on('greet', function() {
	console.log('A greeting occurred!');
});

emtr.on('greet', function(u) {
	console.log(this.name);
	if(this instanceof Person){
		console.log('this is instance of Person');
	}
	console.log('User: ' + u + ' has logged');
}.bind(michael, 'Nicolás'));



console.log('Hello!');
emtr.emit('greet');
