let free = false;

let problema1 = "Realiza una calcualdora de operaciones elementales."

document.getElementById("descripcionP1").innerHTML = problema1 + "<br>";

var elementosDeCalculadora = ["CE", "C", "<--", "7", "8", "9", "4", "5", "6", "1", "2", "3", "-", "0", "+", "*", ".", "="]

function creacionDeElementos(elementosDeCalculadora){
  var botones = []
  var contenedor = document.getElementById("contenedorBotones")

  for(elementos of elementosDeCalculadora){

    var boton = document.createElement("button");
    //boton.innerHTML = `<button class="botones">${elementos}</button>`
    boton.textContent = elementos
    boton.className = "botones"
    boton.id = `${elementos}`
    boton.addEventListener("click", function() {
      //console.log("Haz hecho clic en el botón " + this.id);
      encadenarNumeros(this.id + "")
    });
    contenedor.appendChild(boton)
  }
}

creacionDeElementos(elementosDeCalculadora)

//Operaciones En cadena


var cadenaOperacion = "0"
var cadenaResultado = "0"
var tienePuntoDecimal = false
var operadorSuma = false
var operadorResta = false
var operadorMultiplicacion = false
var operadorDivision = false
function encadenarNumeros(idBoton){
  
  let operacion = document.getElementById("elementosOperacion")
  let resultado = document.getElementById("resultadoOperacion")

  if(idBoton == "0" || idBoton == "1" || idBoton == "2" || idBoton == "3" || idBoton == "4" || idBoton == "5" || idBoton == "6" || idBoton == "7" || idBoton == "8" || idBoton == "9"){  
    if( cadenaOperacion.substring(0) == "0" && idBoton !== "."){
      cadenaOperacion = cadenaOperacion.substring(0, cadenaOperacion.length-1)
      resultado.innerHTML += idBoton//Revisar
    }
    cadenaOperacion += idBoton//COncatenacion de strings
    resultado.innerHTML = cadenaOperacion
  }

  if(idBoton == "." && tienePuntoDecimal == false){ 
    cadenaOperacion += idBoton//COncatenacion de strings
    resultado.innerHTML = cadenaOperacion
    tienePuntoDecimal = true
    //Validar que no haya más de un punto en un numero escrito
  }

  if(idBoton == "<--"){
    //cadenaOperacion = cadenaOperacion.substring(0, cadenaOperacion.length-1)
    //operacion.innerHTML = cadenaOperacion
    var hayPunto = cadenaOperacion.substring(cadenaOperacion.length)
    hayPunto == "." ? tienePuntoDecimal = true : tienePuntoDecimal = false
    cadenaOperacion == "0" || cadenaOperacion == "" || cadenaOperacion.length == 1 ? cadenaOperacion = "0" : cadenaOperacion = cadenaOperacion.substring(0, cadenaOperacion.length-1);
    resultado.innerHTML = cadenaOperacion
  }

  if(idBoton == "CE"){
    cadenaOperacion = "0"
    resultado.innerHTML = cadenaOperacion
  }

  if(idBoton == "C"){
    cadenaOperacion = "0"
    operacion.innerHTML = cadenaOperacion
    cadenaResultado = "0"
    resultado.innerHTML = cadenaResultado
    //Validar que no haya más de un punto en un numero escrito
  }

  //Operaciones
  if(idBoton == "+"){
    //Llamar a funcion operaciones con el parámetro de la operacion
    //concatenacionDeElementos(idBoton)
    if(tieneOperador == true){

    }
    cadenaOperacion += idBoton//COncatenacion de strings
    resultado.innerHTML = cadenaOperacion
    
    

  }

  if(idBoton == "-"){
    //Llamar a funcion operaciones con el parámetro de la operacion
    if(tieneOperador == true){
      
    }
    cadenaOperacion += idBoton//COncatenacion de strings
    resultado.innerHTML = cadenaOperacion
   

  }

  if(idBoton == "*"){
    if(tieneOperador == true){
      
    }
    //Llamar a funcion operaciones con el parámetro de la operacion
    cadenaOperacion += idBoton//COncatenacion de strings
    resultado.innerHTML = cadenaOperacion
   

  }

  if(idBoton == "/"){
    if(tieneOperador == true){
      
    }
    //Llamar a funcion operaciones con el parámetro de la operacion
    cadenaOperacion += idBoton//COncatenacion de strings
    resultado.innerHTML = cadenaOperacion
    

  }

  if(idBoton == "="){
    //Llamar a funcion operaciones con el parámetro de la operacion

  }
}

function complementacionDeOperaciones(numero, operadorSeleccionado){
  cadenaOperacion = numero + operadorSeleccionado  
}



//Operaciones que se mandarán a llamar
const sumar = (num1, num2)=>{
  return parseInt(num1) + parseInt(num2)
}

const restar = (num1, num2)=>{
  return parseInt(num1) - parseInt(num2)
}

const multiplicar = (num1, num2)=>{
  return parseInt(num1) * parseInt(num2)
}

const dividir = (num1, num2)=>{
  return parseInt(num1) / parseInt(num2)
}









