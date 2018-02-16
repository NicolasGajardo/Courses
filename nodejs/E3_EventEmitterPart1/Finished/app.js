var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function() {
	console.log('Somewhere, someone said hello.');
});

emtr.on('greet', function() {
	console.log('A greeting occurred!');
});

emtr.on('greet', function(u) {
	console.log(this);
	if(this instanceof String){
		
	}
	console.log('User: ' + u + ' has logged');
}.bind({}, 'Nicolás'));



console.log('Hello!');
emtr.emit('greet');
