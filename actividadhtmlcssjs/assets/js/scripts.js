//TODO: Implement iffe
function validateForm() {
  var submit = document.forms.formulario1.input1.value;
  console.log(submit);
  return false;
}
//id, boolean
var _changeInputColor = function( field , bol){
  field.style.outlineStyle = "solid";
  if(bol){
      field.style.outlineColor = "green";
  } else {
    field.style.outlineColor = "red";
  }
};

//TODO: msj functionality (use clousures)
function _validateField(field, fn, msj) {
  //return the validated Field
  var r = fn(field.value);
  _changeInputColor(field, r);
  return r;
}

//TODO: refactor the currently way of getting the object
function checkFullName() {
    _validateField(document.getElementById('input1'), function(value){
      var re = new RegExp("^[A-Z]* [A-Z]*$");
      return value.match(re);
    });
}

function checkAge() {
    _validateField(document.getElementById('input2'), function(value){
      return 1 <= value && value <= 150;
    });
}

function checkColour() {
    _validateField(document.getElementById('input3'), function(value){
      // var v = value.toUpperCase();
      // return v === 'ROJO' ||  v === 'VERDE' ||  v === 'AZUL';
      var colores = ['ROJO', 'VERDE', 'AZUL'];
      return colores.indexOf(value.toUpperCase())>=0 ? true : false;
    });
}

function checkProgramingLanguage() {
    _validateField(document.getElementById('input4'), function(value){
      // var v = value.toUpperCase();
      return value.toUpperCase() === 'JAVA';
    });
}

function checkBankAccount() {
    _validateField(document.getElementById('input5'), function(value){
      return !isNaN(value) && 5 < value.length && value.length < 20;
    });
}

function checkPalindrome() {
    _validateField(document.getElementById('input6'), function(value){
      return value === value.split("").reverse().join("");
    });
}

function checkTodayDate() {
    _validateField(document.getElementById('input7'), function(value){
      var d = new Date();
      //TODO: double check instead of triple check
      return d.getDate() == value;
    });
}
