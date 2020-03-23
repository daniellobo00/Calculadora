function testando(item_b){
  var item_a = document.getElementById('resultado').value
  var item_b_content = item_b.textContent
  document.getElementById('resultado').value = item_a + item_b_content
 
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