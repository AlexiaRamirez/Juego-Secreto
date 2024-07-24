let numeroSecreto = 0;
let intentos = 1; 
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById ("valorUsuario").value);

    if (numeroDeUsuario == numeroSecreto) {
      asignarTextoElemento("p", `Acertaste el numero crack! Solo te tomo ${intentos} ${intentos === 1 ? "intento" : "intentos"}`);
      document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
      // el usuario no acertó
      if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento ("p", "El numero secreto es menor");
      } else {
        asignarTextoElemento("p", "El numero secreto es mayor");
      }
      intentos ++ ;
      limpiarCaja ();
      
    }
    return;
}

function limpiarCaja () {
  let valorCaja = document.querySelector('#valorUsuario').value = "";
  
}



function asignarTextoElemento (elemento, texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto; 
    return;
}

function generarNumeroSecreto () {
  let numeroGenerado =  Math.floor (Math.random()*numeroMaximo)+1;

  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);

  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento ("p","Ya se sortearon todos los números posibles");
  } else {
  // Si el numero generado esta en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto ();
    } else {
      listaNumerosSorteados.push (numeroGenerado);
      return numeroGenerado; 
    }
      
  }
}


function condicionesIniciales () {
  asignarTextoElemento("h1","Juego del número secreto");
  asignarTextoElemento("p",`Indica un numero del 1 al ${numeroMaximo}`);
  numeroSecreto=generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  limpiarCaja();
  condicionesIniciales ();
  document.querySelector("#reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();
