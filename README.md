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
4. puede ingresar al link https://rogerleo54.github.io/Challenge-amigo-secreto/ para ingresar directamente

## Como se Juega
1. Ingresa los nombres de tus amigos en el campo de texto y haz clic en "Añadir".
2. Una vez que hayas agregado todos los nombres, haz clic en "Sortear amigo" para seleccionar un amigo secreto aleatorio.
3. El resultado aparecerá arriba del botón de sorteo, mostrando el nombre del amigo secreto.
4. Video de como se juega:
https://github.com/user-attachments/assets/cacd3c55-93b4-484d-828c-de21980355d0

## Tecnologías utilizadas

- **HTML**: Para la estructura de la página.
- **CSS**: Para el diseño y la presentación.
- **JavaScript**: Para la funcionalidad de la aplicación (agregar amigos, sorteo aleatorio, etc.).

## Posibles problemas y soluciones

- **Problema 1: El botón de "Añadir" no responde**  
  **Solución**: Asegúrate de que el campo de texto no esté vacío antes de hacer clic en el botón. Si el campo está vacío, la función `agregarAmigo()` no agregará el nombre a la lista.

- **Problema 2: No se puede sortear un amigo secreto si no hay nombres en la lista**  
  **Solución**: Si intentas hacer clic en "Sortear amigo" y no has agregado nombres, se mostrará un mensaje de alerta indicando que no hay amigos en la lista. Asegúrate de agregar al menos un amigo antes de hacer el sorteo.

- **Problema 3: La lista de amigos no se actualiza al agregar un nuevo nombre**  
  **Solución**: Verifica que el código de la función `mostrarAmigos()` esté correctamente implementado. Asegúrate de que el array `amigos` esté siendo actualizado cada vez que se agrega un nuevo nombre.

- **Problema 4: El resultado del sorteo no se muestra correctamente**  
  **Solución**: Asegúrate de que la función `sortearAmigo()` esté correctamente implementada. Si el problema persiste, revisa si la variable `resultado` está correctamente vinculada al elemento HTML con id "resultado".

- **Problema 5: El sorteo aleatorio parece no ser aleatorio**  
  **Solución**: El método `Math.random()` genera números pseudo-aleatorios. Si crees que hay un patrón, esto puede ser simplemente una coincidencia. Si es necesario, revisa si el cálculo del índice aleatorio en la función `sortearAmigo()` está siendo realizado correctamente.

