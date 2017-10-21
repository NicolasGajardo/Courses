var g = G$('Jhon', 'Doe');

$('#login').click(function(){
  
  var loginGrtr = G$('Jhon', 'Doe');
  
  $('#loginindiv').hide();
  
  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting' , true).log();
  
});