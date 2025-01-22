// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Se crea un array para almacenar los nombres indicados por el jugador
let amigos = [];

/*
  Añade el nombre de un amigo a la lista.
  Toma el valor del campo de texto, valida que no esté vacío,
  y lo agrega al arreglo de amigos. Luego actualiza la lista en la interfaz.
 */
function agregarAmigo() {
    let nombreDeAmigo = document.getElementById('amigo').value; 

    // Validar que el campo no esté vacío.
    if (nombreDeAmigo === "") {
        alert("Por favor, ingrese un nombre.");
    } else {
        amigos.push(nombreDeAmigo); // Agrega el nombre al arreglo 'amigos'.
        mostrarAmigos(); // Llama a la función para actualizar la lista de amigos en la interfaz.
    }
    console.log(amigos); // Muestra el arreglo 'amigos' en la consola para depuración.
    limpiarCaja(); // Limpia el campo de texto para facilitar la entrada de nuevos nombres.
}

//Limpia el campo de texto donde se escribe el nombre del amigo.
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

/*
 Muestra los nombres de los amigos en la interfaz HTML. 
 Itera sobre el arreglo 'amigos' y agrega cada nombre como un 
 elemento de lista (<li>) al contenedor correspondiente.
 */
function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpia la lista antes de mostrarla nuevamente.
    
    // Iterar sobre el arreglo 'amigos' y agregar cada nombre a la lista HTML.
    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

/*
 Selecciona un amigo aleatorio de la lista y muestra el resultado.
 Si no hay amigos en la lista, muestra una alerta.
 Si hay amigos, selecciona uno de forma aleatoria usando Math.random() y muestra el resultado.
 */
function sortearAmigo() {
    // Validar que haya al menos un amigo en la lista antes de realizar el sorteo.
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear. Por favor, añade nombres.');
        return;
    }

    // Generar un índice aleatorio para seleccionar un amigo.
    const amigoAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre del amigo sorteado.
    const amigoSorteado = amigos[amigoAleatorio];

    // Actualizar el elemento 'resultado' con el nombre del amigo sorteado.
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>¡El amigo secreto es: <strong>${amigoSorteado}</strong>!</li>`;
}
