(function (win, $){
  
  var Greetr = function(firstame, lastname, language) {
    return new Greetr.init(firstame, lastname, language);
  };
  
  var supportedLangs = ['en' , 'es'];
  
  var greetings = {
    en: 'Hi',
    es: 'Hola'
  };
  
  var formalGreetings = {
    en: 'Greetings',
    es: 'Saludos'
  };
  
  var logMessages = {
    en: 'Logged in',
    es: 'Inició sesión'
  };
  
  Greetr.prototype = {
    fullname: function(){
      return this.firstame + ' ' + this.lastname;
    },
    
    validate: function () {
      if (supportedLangs.indexOf(this.language) === -1){
        throw 'Invalid Languae';
      }
    },
    
    greeting: function(){
      return greetings[this.language] + ' ' + this.firstame + '!';
    },
    
    formalGreeting: function(){
      return greetings[this.language] + ' ' + this.fullname();
    },
    
    greet: function(formal){
      var msg;
      if (formal) {
          msg = this.formalGreeting();  
      }
      else {
          msg = this.greeting();  
      }
      if (console) {
          console.log(msg);
      }
      return this;
    },
    
    log: function(){
      if(console){
        console.log(logMessages[this.language] + ': ' + this.fullname());
      }
      return this;
    },
    
    setLang: function(lang) {
      this.language = lang;
      this.validate();
      return this; 
    }
  };
    
  Greetr.init = function(firstame, lastname, language) {
    
    var self = this;
    
    self.firstame = firstame || '';
    self.lastname = lastname || '';
    self.language = language || 'en';

  };
  
  Greetr.init.prototype = Greetr.prototype;
  
  win.Greetr = win.G$ = Greetr;
  
}(window, jQuery));