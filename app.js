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
        mostrarAmigos(); // llama la funcion para actualizar la lista HTML.
    }
    console.log(amigos);
    limpiarCaja();
}

//Funcion de limpiar el campo de escritura 
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

//Funcion para mostrar amigos en la lista HTML
function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML= "";
    
    //crear el iterar sobre el arreglo amigos y agregar cada nombre como un elemento <li>
    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}
