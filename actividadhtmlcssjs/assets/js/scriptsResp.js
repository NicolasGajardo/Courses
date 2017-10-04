function validateForm() {
    var submit = document.forms["formulario1"]["input1"].value;
    console.log(submit);
    return false;
}

//id, boolean
var _changeInputColor = function( inputObj , bol){
  
}



function validateNameLastname() {
    var input1Obj = document.getElementById('input1');
    var value = input1Obj.value;    
    
    if(value && value.includes(" ") && 1 === value.search("n*\sn*")){
      input1Obj.style.outlineStyle = "solid"
      input1Obj.style.outlineColor = "green"
      return true;
    }  
    
    input1Obj.style.outlineStyle = "solid"
    input1Obj.style.outlineColor = "red"
    return false;
}

function validateAge(){
  var input2Obj = document.getElementById('input2');
  var value = input2Obj.value;    
  
  if( 1 <= value && value <= 150){
    return true;
  }
}