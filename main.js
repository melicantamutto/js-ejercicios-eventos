// playlist

// Crear un documento html con un título que diga Mis canciones favoritas y una lista desordenada. Pedir mediante prompts por cinco canciones (una a la vez), y agregar esas canciones como ítems de la lista desordenada

// let cancion1, cancion2, cancion3, cancion4, cancion5;
// cancion1 = prompt('Ingresá el nombre de la primer canción');
// cancion2 = prompt('Ingresá el nombre de la segunda canción');
// cancion3 = prompt('Ingresá el nombre de la tercer canción');
// cancion4 = prompt('Ingresá el nombre de la cuarta  canción');
// cancion5 = prompt('Ingresá el nombre de la quinta canción');

// const lista = document.getElementById('listaCanciones');
// const textoLista = `<li> ${cancion1} </li>
// <li> ${cancion2} </li>
// <li> ${cancion3} </li>
// <li> ${cancion4} </li>
// <li> ${cancion5} </li>`;
// lista.innerHTML= textoLista;


// contador

// Crear un documento html que muestre un número (empezando en 0) y 6 botones con los siguientes valores: -1, +1, -5, +5, -10, +10. Cuando se clickea un botón, se tiene que sumar o restar la cantidad correspondiente, y actualizar el número mostrado.

// let numero = document.getElementById('numero');
// const menosUno = document.getElementById('menosUno');
// const masUno = document.getElementById('masUno');
// const menosCinco = document.getElementById('menosCinco');
// const masCinco = document.getElementById('masCinco');
// const menosDiez = document.getElementById('menosDiez');
// const masDiez = document.getElementById('masDiez');

// menosUno.addEventListener('click', ()=>{
//     numero.innerText = parseInt(numero.innerHTML) - 1;
// })
// masUno.addEventListener('click', ()=>{
//     numero.innerText = parseInt(numero.innerHTML) + 1;
// })
// menosCinco.addEventListener('click', ()=>{
//     numero.innerText = parseInt(numero.innerHTML) - 5;
// })
// masCinco.addEventListener('click', ()=>{
//     numero.innerText = parseInt(numero.innerHTML) + 5;
// })
// menosDiez.addEventListener('click', ()=>{
//     numero.innerText = parseInt(numero.innerHTML) - 10;
// })
// masDiez.addEventListener('click', ()=>{
//     numero.innerText = parseInt(numero.innerHTML) + 10;
// })


// adivinanza

// Crear un documento html con una adivinanza (o una pregunta) y 3 botones con posibles respuestas. Si se clickea la respuesta correcta, se debe mostrar en el documento un texto que lo indique (por ejemplo: ¡Correcto!) debajo de la adivinanza, y el botón seleccionado debe ponerse con un color de fondo verde. Si se clickea una respuesta incorrecta, se debe mostrar en el documento un texto que lo indique (por ejemplo: ¡Le erraste!) y mostrar el botón con la respuesta correcta con un color de fondo verde y los otros dos con un color de fondo rojo.

// const respuesta1 = document.getElementById('respuesta1');
// const respuesta2 = document.getElementById('respuesta2');
// const respuesta3 = document.getElementById('respuesta3');
// const positivo = document.getElementById('positivo');
// const negativo = document.getElementById('negativo');


// respuesta1.addEventListener('click', () =>{
//     negativo.style.display= 'inline';
//     positivo.style.display= 'none';
//     respuesta1.style.backgroundColor= 'red';
//     respuesta2.style.backgroundColor= 'red';
//     respuesta3.style.backgroundColor= 'greenyellow';
// })
// respuesta2.addEventListener('click', () =>{
//     negativo.style.display= 'inline';
//     positivo.style.display= 'none';
//     respuesta1.style.backgroundColor= 'red';
//     respuesta2.style.backgroundColor= 'red';
//     respuesta3.style.backgroundColor= 'greenyellow';
// })
// respuesta3.addEventListener('click', () =>{
//     positivo.style.display= 'inline';
//     negativo.style.display= 'none';
//     respuesta3.style.backgroundColor= 'greenyellow';
// })

// paleta

// Crear un documento html que tenga 6 botones con un color de fondo distinto, y un div cuadrado grande. Cuando se clickea un botón, el div debe cambiar su color de fondo al mismo color de fondo que el del botón clickeado.

// const cuadrado = document.getElementById('cuadrado');
// const color1 = document.getElementById('color1');
// const color2 = document.getElementById('color2');
// const color3 = document.getElementById('color3');
// const color4 = document.getElementById('color4');
// const color5 = document.getElementById('color5');
// const color6 = document.getElementById('color6');

// //BUSCANDO LA PROPIEDAD DE CSS


// color1.addEventListener('click', () =>{
//     const estilos = window.getComputedStyle(color1);
//     const background = estilos.getPropertyValue('background-color');
//     console.log(background);
//     cuadrado.style.backgroundColor= background;
// })
// color2.addEventListener('click', () =>{
//     const estilos = window.getComputedStyle(color2);
//     const background = estilos.getPropertyValue('background-color');
//     console.log(background);
//     cuadrado.style.backgroundColor= background;
// })
// color3.addEventListener('click', () =>{
//     const estilos = window.getComputedStyle(color3);
//     const background = estilos.getPropertyValue('background-color');
//     console.log(background);
//     cuadrado.style.backgroundColor= background;
// })
// color4.addEventListener('click', () =>{
//     const estilos = window.getComputedStyle(color4);
//     const background = estilos.getPropertyValue('background-color');
//     console.log(background);
//     cuadrado.style.backgroundColor= background;
// })
// color5.addEventListener('click', () =>{
//     const estilos = window.getComputedStyle(color1);
//     const background = estilos.getPropertyValue('background-color');
//     console.log(background);
//     cuadrado.style.backgroundColor= background;
// })
// color6.addEventListener('click', () =>{
//     const estilos = window.getComputedStyle(color6);
//     const background = estilos.getPropertyValue('background-color');
//     console.log(background);
//     cuadrado.style.backgroundColor= background;
// })



// email (sin leer)

// Crear un documento html que tenga:

//     un título h1 que diga: Mis emails
//     un título h2 que diga: Bandeja de entrada
//     una lista desordenada con 10 ítems con lorem ipsum (4 o 5 palabras cada uno, no un párrafo entero)

// Inicialmente los ítems deben estar en negrita y con color negro. Cuando se clickea uno de ellos, se debe sacarle la negrita y ponerle un color gris (simulando que el email fue leído)

// const mails = document.getElementsByClassName('mail');

// Array.from(mails).forEach(mail => {
//   mail.addEventListener('click', () => {
//       if(mail.classList[1] === 'read'){
//           mail.classList.remove('read');
//       } else{
//         mail.classList.add('read');
//       }
//   });
// });


// progreso

// Crear un documento html con

//     una barra de progreso (con un div dentro de otro)
//     un elemento de texto que indique el progreso (p. ej. 50%)
//     dos botones, uno para incrementar y otro para dismininuir la barra (- y +)
//     cuando se apretan los botones, la barra de progreso tiene que aumentar o disminuir respectivamente y el texto que indica el porcentaje de progreso tiene que actualizarse
//     lo mismo tiene que pasar cuando se apreta la flecha derecha (aumentar progreso) y la flecha izquierda (disminuir progreso)
//     el incremento/decremento es del 10%

// let contador = 50;
// const minus = document.getElementById('minus');
// const plus = document.getElementById('plus');
// const porcentaje = document.getElementById('porcentaje');
// const pintado = document.getElementById('pintado');

// plus.addEventListener('click', () =>{
//     if (contador <100){
//           contador +=10;
//         pintado.style.width= `${contador}%`;
//         porcentaje.innerText = `${contador}%`;
//     }
// })
// minus.addEventListener('click', () =>{
//     if (contador > 0){
//           contador -=10;
//         porcentaje.innerText = `${contador}%`;
//         pintado.style.width= `${contador}%`;
//     }
// })


// modo-oscuro

// Crear un documento html con un título, un párrafo y un bótón con un ícono. Centrar los elementos, cambiar los tamañas y tipografía del texto y tamaño del ícono. Hacer que el body ocupe toda la pantalla. Al clickear el botón, debe alternar entre modo oscuro y modo claro:

//     modo oscuro: body con color de fondo negro, texto e ícono con color blanco, ícono de sol
//     modo claro: body con color de fondo blanco, texto e ícono con color negro, ícono de luna


// const modoOscuro = document.getElementById('modoOscuro');
// const caja = document.getElementById('caja');


// modoOscuro.addEventListener('click', () =>{
//     if(caja.classList.contains('modo-claro') === true){
//         caja.classList.remove('modo-claro')
//     } else{
//         caja.classList.add('modo-claro')
//     }
//     if(caja.classList.contains('modo-claro') === true){
//         modoOscuro.innerHTML = '<i class="fas fa-moon"></i>';
//     } else{
//         modoOscuro.innerHTML = '<i class="fas fa-sun"></i>'
//     }
// })


// scroll

// Crear un documento html con un body de 2000px de alto. Cuando se scrollea el body, cambiar el color de fondo cada 500px, por ejemplo:
// Scroll 	Color de fondo
// 0px - 500px 	red
// 501px - 1000px 	green
// 1001px - 1500px 	blue
// 1501px - 2000px 	orange

const body = document.getElementById('body');

// body.style.height = '2496px';
// // tamaño scroll = 496px
// // tamaño pantalla = document.body.scrollHeight


// window.onscroll= () =>{
//     const positionY = window.scrollY;
//     console.log(positionY)
//     if (positionY >= 0 && positionY <= 500){
//         body.style.backgroundColor = 'red';
//     } else if (positionY >= 501 && positionY <= 1000){
//         body.style.backgroundColor = 'green';
//     } else if (positionY >= 1001 && positionY <= 1500){
//         body.style.backgroundColor = 'blue';
//     } else if (positionY >= 1501 && positionY <= 2000){
//         body.style.backgroundColor = 'orange';
//     } 
// }



// imagenes

// Crear un documento html con al menos 4 imágenes chicas (100px de alto) y una imagen grande (500px de alto). Cuando se clickean las imágenes chicas, la imagen grande se tiene que actualizar con la misma que la imagen chica clickeada.

// const img1 = document.getElementById('img1');
// const img2 = document.getElementById('img2');
// const img3 = document.getElementById('img3');
// const img4 = document.getElementById('img4');

// img1.addEventListener('click', () =>{
//     img3.src = `${img1.src}`;
// })
// img2.addEventListener('click', () =>{
//     img3.src = `${img2.src}`;
// })
// img4.addEventListener('click', () =>{
//     img3.src = `${img4.src}`;
// })
// img3.addEventListener('click', () =>{
//     img3.src = './assets/ramita.jpg';
// })

// otra solucion mas corta 
// const imagenes = document.getElementsByTagName('img');
// //5 // 5 < 5
// for(let i = 0; i < imagenes.length; i++){
// imagenes[i].addEventListener('click', e =>{
// const nuevoLink = e.target.src;
// img5.setAttribute('src', nuevoLink)
// })
// } 

// imagenes-2

// Repetir el ejercicio anterior, pero en vez de cambiar la imagen grande cuando se clickean las imágenes chicas, hacerlo cuando se pasa el mouse por encima de las imágenes chicas.


// img1.addEventListener('mouseover', () =>{
//     img3.src = `${img1.src}`;
// })
// img2.addEventListener('mouseover', () =>{
//     img3.src = `${img2.src}`;
// })
// img4.addEventListener('mouseover', () =>{
//     img3.src = `${img4.src}`;
// })
// img3.addEventListener('mouseover', () =>{
//     img3.src = './assets/ramita.jpg';
// })



// peliculas

// Crear un documento html con 12 imágenes de posters de películas. Buscar imágenes de películas de 3 géneros (acción, aventura, ciencia ficción, comedia, etc), 4 películas por género. Agregar al documento un botón por cada género, y un botón que diga Todas. Cuando se clickea el botón de un género, se tienen que mostrar sólo las películas correspondientes a ese género. Cuando se clickea el botón Todas se tienen que mostrar todas las películas.

// const buttonRegency = document.getElementById('regency');
// const buttonIndie = document.getElementById('indie');
// const buttonMusical = document.getElementById('musical');
// const buttonAll = document.getElementById('all');
// const films = document.getElementsByClassName('film');


// buttonRegency.addEventListener('click', (e) =>{
//     e.preventDefault();
//     for(i=0; i<films.length; i++) { 
//         if (films[i].classList.contains('regency')){
//             films[i].classList.add('visible');
//         } else if(films[i].classList.contains('visible')){
//             films[i].classList.remove('visible');
//         }
//     }
// })
// buttonIndie.addEventListener('click', (e) =>{
//     e.preventDefault();
//     for(i=0; i<films.length; i++) {
//         if (films[i].classList.contains('indie')){
//             films[i].classList.add('visible');
//         }else if(films[i].classList.contains('visible')){
//             films[i].classList.remove('visible');
//         }
//     }
// })
// buttonMusical.addEventListener('click', (e) =>{
//     e.preventDefault();
//     for(i=0; i<films.length; i++) {
//         if (films[i].classList.contains('musical')){
//             films[i].classList.add('visible');
//         }else if(films[i].classList.contains('visible')){
//             films[i].classList.remove('visible');
//         }
//     }
// })
// buttonAll.addEventListener('click', (e) =>{
//     e.preventDefault();
//     for(i=0; i<films.length; i++) {
//         films[i].classList.add('visible');
//     }
// })





// pin

//     En un documento html crear botones con números del 0 al 9, un botón para reiniciar, un botón para borrar, y un elemento de texto.
//     Cuando se presionan los botones de números, se tienen que ir agregando los números en el elemento de texto. Por ejemplo, si se presiona el 1 y después el 3, se tiene que mostrar "13".
//     El máximo de dígitos que se pueden ingresar es 6, cuando ya hay 6 dígitos ingresados y se clickea un nuevo número, no debe pasar nada.
//     El botón de reiniciar debe borrar todos los dígitos del elemento de texto.
//     El botón de borrar debe borrar el último dígito del elemento de texto. Por ejemplo, si el pin ingresado es 2544 y se presiona la tecla borrar, debe quedar en 254.

// const pin = document.getElementById('pin');
// const reboot = document.getElementById('reboot');
// const erase = document.getElementById('erase');
// const buttons = document.getElementsByClassName('number');


// Array.from(buttons).forEach(button => {
//     button.addEventListener('click', () =>{
//         if (pin.innerText.length < 6){
//             pin.innerText = `${pin.innerText}${button.innerText}`;
//         } else{
//             pin.innerText = '';
//         }
//     })
// })

// reboot.addEventListener('click', () => {
//     pin.innerText = '';
// })

// erase.addEventListener('click', () =>{
    
//     pin.innerText = pin.innerText.slice(0, -1);
// })




// favoritos

// Crear dos contenedores, uno para imágenes y otro para favoritos. En el contenedor de imágenes, agregar al menos 10 imágenes (cualesquiera). Al clickear una imagen en el contenedor de imágenes, se debe agregar la misma imagen en el contenedor de favoritos. Al clickear una imagen en el contenedor de favoritos, se debe eliminar la imagen seleccionada de dicho contenedor.


// const favoritos = document.getElementById('favoritos');
// const opciones = document.getElementsByClassName('opcion');


// Array.from(opciones).forEach(imagen => {
//     imagen.addEventListener('click', () =>{
//         const nuevaImg = document.createElement('img');
//         nuevaImg.src = `${imagen.src}`
//         favoritos.appendChild(nuevaImg);
//         nuevaImg.classList += 'agregada';
//     })
// })


// favoritos.addEventListener('mouseover', () =>{
//     const imgFavoritas = document.getElementsByClassName('agregada');
//     console.log(imgFavoritas);
//     Array.from(imgFavoritas).forEach(elegida => {
//         elegida.addEventListener('click', () =>{
//            favoritos.removeChild(elegida);
//         })
//     })
// })




// color-aleatorio

// Hacer un programa que al apretar la tecla espacio, cambie el color de fondo del body por un color aleatorio. Para eso, crear una función obtenerColorAleatorio() que devuelva un string con el formato de ejemplo rgb(0,0,0) donde los valores de r, g y b se generan aleatoriamente (con números del 1 al 255).



// function random(min, max) {
//     return Math.floor((Math.random() * (max - min + 1)) + min);
// }
// let valor1 = random(1, 255);
// let valor2 = random(1, 255);
// let valor3 = random(1, 255);

    
// window.addEventListener('keyup', (e) => {
//     const tecla = e.which || e.keyCode;
//     const color = `rgb(${valor1}, ${valor2}, ${valor3})`;
//     if(tecla === 32) {
//         body.style.backgroundColor = `${color}`
//         valor1 = random(1, 255);
//         valor2 = random(1, 255);
//         valor3 = random(1, 255);
//     }
// });



// adivinar-numero

// Crear un programa que genere un número aleatorio entre 0 y 9. Cuando se presiona un número en el teclado, el programa debe mostrar en el documento html un mensaje:

//     si el número seleccionado es más grande que el número aleatorio generado, debe mostrar El número es más chico
//     si el número seleccionado es más chico que el número aleatorio generado, debe mostrar El número es más grande
//     si el número seleccionado es igual al número aleatorio generado, debe mostrar Adivinaste.

// El mensaje también debe incluir el número ingresado (por ejemplo, Número ingresado: 3). El mensaje debe mostrarse en un elemento del documento html, no en un alert.

// Por ejemplo:

// Número aleatorio: 7 (No se muestra)
// Usuario presiona 3
// "El número es más grande. Número ingresado: 3"
// Usuario presiona 9
// "El número es más chico. Número ingresado: 9"
// Usuario presiona 7
// "Adivinaste. Número ingresado: 7"

// El documento también debe tener un botón que diga Reiniciar, que genere un nuevo número y actualice el mensaje para indicarlo (por ejemplo ¡Nueva partida! Presione un número.)

// function random(min, max) {
//     return Math.floor((Math.random() * (max - min + 1)) + min);
// }
// const alerta = document.getElementById('alerta');
// let numeroCorrecto = random(0, 9);

// window.addEventListener('keyup', (event) => {
//     const numeroElegido = event.key; 
//     console.log(numeroElegido)
//     if(numeroElegido > numeroCorrecto) {
//         alerta.innerText = `El número es más chico. Número ingresado: ${numeroElegido}`;
//     }else if(numeroElegido < numeroCorrecto) {
//         alerta.innerText = `El número es más grande. Número ingresado: ${numeroElegido}`;
//     } else if(numeroElegido == numeroCorrecto){
//         alerta.innerText = `Adivinaste. Número ingresado: ${numeroElegido}`;
//         numeroCorrecto= random(0,9);
//     }
// });




