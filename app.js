// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Se crea un array para almacenar los nombres indicados por el jugador
let amigos = [];

//Guarda el nombre escrito en la variable nombreDeAmigo
function agregarAmigo() {
    let nombreDeAmigo = document.getElementById('amigo').value; 

    console.log(nombreDeAmigo);

    //Valida que el campo no este vacio. 
    if (nombreDeAmigo === "") {
        alert ("Por favor, inserte un nombre.");
    } else {
        amigos.push(nombreDeAmigo); //alimenta el array amigos con los nombres indicados
    }
    console.log(amigos);
    limpiarCaja();
}

//Funcion de limpiar el campo de escritura 
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}
