


function Add_eventos(){
  var number_button = document.getElementsByClassName('number_button');
for(var i=0; i < number_button.length; i++) {  
  var Target_elem = number_button[i]
  var teste2 = target_elem.textContent
  Target_elem.addEventListener('click' , testando(this.textContent),false)
  console.log("teste")
}}

Add_eventos()


function testando(item_b){
  var item_a = document.getElementById('resultado').value
  var item_b_content = item_b.textContent

  if (item_b.textContent != ",") {
    document.getElementById('resultado').value = item_a + item_b_content
  }
  else {
    document.getElementById('resultado').value = item_a + "."
  }

 
}

var buffer_cal = ""
var buffer_type = ""

function soma(){
      buffer_cal = parseInt(document.getElementById('resultado').value)
      buffer_type = "+"
      document.getElementById('resultado').value = ""
}

function subtracao(){
      buffer_cal = parseInt(document.getElementById('resultado').value)
      buffer_type = "-"
      document.getElementById('resultado').value = ""
}

function multiplicacao(){
      buffer_cal = parseInt(document.getElementById('resultado').value)
      buffer_type = "*"
      document.getElementById('resultado').value = ""
}

function divisao(){
      buffer_cal = parseInt(document.getElementById('resultado').value)
      buffer_type = "/"
      document.getElementById('resultado').value = ""
}

function resultado_cal(){
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
}

function limpar(){
  document.getElementById('resultado').value = ""
}