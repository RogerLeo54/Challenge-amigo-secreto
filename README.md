# Challenge Amigo Secreto

## Descripción
Este proyecto es parte de un reto propuesto por **Alura Latam** y **One, Oracle Next Education**. Consiste en una aplicación de "Amigo Secreto" que permite a los usuarios agregar nombres, seleccionar un amigo aleatorio y mostrar el resultado en tiempo real. La funcionalidad principal se enfoca en agregar amigos a una lista y sortear aleatoriamente un amigo secreto para cada persona. El diseño de la interfaz y la estructura HTML/CSS fueron proporcionados por los instructores, mientras que la implementación en JavaScript fue desarrollada por mí.

## Retos y Soluciones

- **Desafío 1: Selección aleatoria del amigo secreto**  
  Implementar una función que elija un amigo aleatorio utilizando `Math.random()` y `Math.floor()`. Se usaron estas funciones de JavaScript para generar un índice aleatorio, lo que garantizó la aleatoriedad del sorteo.

- **Desafío 2: Crear un array para almacenar los nombres**  
  La aplicación necesita almacenar los nombres de los amigos en un array. Esto permite que se gestionen los amigos de manera eficiente y se pueda realizar el sorteo con todos los nombres agregados.

- **Desafío 3: Implementar funciones para agregar amigos**  
  Se desarrollaron funciones en JavaScript para permitir que los usuarios agreguen amigos de manera dinámica a la lista. Esto es esencial para que la aplicación funcione correctamente.

- **Desafío 4: Implementar una función para actualizar la lista de amigos**  
  Cada vez que un usuario agrega un nombre, la lista de amigos debe actualizarse y mostrarse en tiempo real, lo que permite una experiencia fluida y sin necesidad de recargar la página.

- **Desafío 5: Implementar una función para sortear los amigos**  
  Se creó una función que selecciona aleatoriamente a un amigo secreto de la lista, mostrando el resultado de manera inmediata cuando se hace clic en el botón "Sortear".

## Instalación

1. Clona el repositorio en tu máquina local:
   ```bash
   git clone https://github.com/RogerLeo54/Challenge-amigo-secreto.git
2. Navega a la carpeta del proyecto:
    ```bash
    cd challenge-amigo-secreto
3. Abre el archivo index.html en tu navegador:
    ```bash
    open index.html
No se requieren dependencias adicionales para este proyecto.

## Como se Juega
1. Ingresa los nombres de tus amigos en el campo de texto y haz clic en "Añadir".
2. Una vez que hayas agregado todos los nombres, haz clic en "Sortear amigo" para seleccionar un amigo secreto aleatorio.
3. El resultado aparecerá arriba del botón de sorteo, mostrando el nombre del amigo secreto.

## Tecnologías utilizadas

- **HTML**: Para la estructura de la página.
- **CSS**: Para el diseño y la presentación.
- **JavaScript**: Para la funcionalidad de la aplicación (agregar amigos, sorteo aleatorio, etc.).
