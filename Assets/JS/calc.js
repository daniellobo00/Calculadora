
 var buffer_cal = ""
 var buffer_type = ""

function Add_eventos(){

    var number_button = document.getElementsByClassName('number_button'); 

    for(var i=0; i < number_button.length; i++) {
    number_button[i].addEventListener('click' , function(){testando(this.textContent)},false)
    } 

    var operators_button = document.getElementsByClassName('operators_button'); 
    for(var i=0; i < operators_button.length; i++) {
    operators_button[i].addEventListener('click' , function(){operador_selecionado(this.textContent)},false) 
    }

    var equals_button = document.getElementById('equals_btt');
    equals_button.addEventListener('click' , function(){resultado_cal()},false)
}

Add_eventos()

function testando(item_b){
  var item_a = document.getElementById('resultado').value
  document.getElementById('resultado').value = item_a + item_b
  }

function operador_selecionado(item_b){
    buffer_cal = parseInt(document.getElementById('resultado').value)
    buffer_type = item_b
    document.getElementById('resultado').value = ""
}

function resultado_cal(){

  if (buffer_type != "") {
  buffer_cal2 = parseInt(document.getElementById('resultado').value)
  
  switch(buffer_type){

    case "+":
      resultado_final = buffer_cal + buffer_cal2
      break;
    case "-":
      resultado_final = buffer_cal - buffer_cal2
      break;
    case "*":
      resultado_final = buffer_cal * buffer_cal2
      break;
    case "/":
      resultado_final = buffer_cal / buffer_cal2
      break;
  }

  document.getElementById('resultado').value = resultado_final
}}

function limpar(){
  document.getElementById('resultado').value = ""
}