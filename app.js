
let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;
let intentosMaximos = 3;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {

        asignarTextoElemento('p', `Acertaste el numero ${(intentos === 1) ? 'a la primera' : `en ${intentos} veces`}`);

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        
        if (intentos >= intentosMaximos) {
            asignarTextoElemento('p', 'Te quedaste sin intentos');
        } else {
            if (numeroDeUsuario > numeroSecreto) {
                asignarTextoElemento('p', 'El numero secreto es menor');
            }
            else {
                asignarTextoElemento('p', 'El numero secreto es mayor');
            }
        }
        intentos++;
        limpiarCaja();
    }

}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';

}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(numerosSorteados);

    if (numerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Se acabaron los numeros');
    } else {

        if (numerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;

        }
    }
}

function condicionesInciales() {
    asignarTextoElemento('h1', 'El juego del Mentalista');
    asignarTextoElemento('p', `Ingrese un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}


function reiniciarJuego() {
    limpiarCaja();
    condicionesInciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesInciales();