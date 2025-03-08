let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10;
let listaNumerosSorteados = [];

function asignarTextoelemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoelemento('p',`Acertaste el número en ${intentos} ${(intentos ===1)? 'vez': 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoelemento('p','El número secreto es menor');
        }else{
            asignarTextoelemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value ='';
} 

function generaNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    if (numeroMaximo == listaNumerosSorteados.length) {
        asignarTextoelemento('p', 'Se sortearon todos los numeros posibles');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generaNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function condicionesIniciales(){
    asignarTextoelemento('h1','Juego número Secreto!!!');
    asignarTextoelemento('p',`Indica un número del 1 al ${numeroMaximo}`);    
    
    //generar numero aleatorio
    numeroSecreto = generaNumeroSecreto();

    //inicializar numero de intentos
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    condicionesIniciales();    
    //deshabilitar boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();




/* let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let intentos =1;
//let palabraVeces ="vez";
let maximosIntentos = 3;

while(numeroUsuario != numeroSecreto){

    numeroUsuario = parseInt(prompt("Me indicas un numero por favor:"));
    
    console.log(numeroUsuario);
    
    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el numero es: ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez':'Veces'}`);
    } else {
        if(numeroUsuario > numeroSecreto){
            alert('el numero secreto es menor');
        }
        else{
            alert('el numero secreto es mayor');
        }

        intentos++;
//        palabraVeces = "veces";

        if(intentos > maximosIntentos){
            alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
            break;
        }
        alert('Lo siento, no acertaste el número')
    }
}
 */