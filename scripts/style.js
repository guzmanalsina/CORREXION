//local storage
localStorage.setItem('Despedida', '¡Gracias por confiar en nosotros!');
localStorage.setItem('Apoyo', 'Continuemos creciendo juntos');
localStorage.setItem('Total', 'Somos una comunidad de 540 personas');

//session storage
sessionStorage.setItem('correcciones', [1,2,3]);
sessionStorage.setItem('esValido', false);
sessionStorage.setItem('email', 'info@correxioner.com');


const botonCargar = document.getElementById('btnCargar');
const content = document.getElementById('content');
const inputName = document.getElementById('name');
const inputAge = document.getElementById('age');
const inputText = document.getElementById('text');
const form = document.getElementById('custom-form');

btnCargar.addEventListener('click', mostrarCard);

function mostrarCard(event) {
  event.preventDefault();
  const inputNameValue = inputName.value;
  const inputAgeValue = inputAge.value;
  const inputTextValue = inputText.value;

  crearCard(inputNameValue, inputAgeValue, inputText.value, content);
}  

 function crearCard(name, age,  text, element) {
  const card = document.createElement('div');

  card.className ="card m-2 p-3";

  card.innerHTML = `<h2>Nombre: ${name} </h2>
  <h3>Edad: ${age} </h3>
  <h2>Texto para ser corregido: ${text} </h2>
  `;

  element.appendChild(card);
}

inputName.addEventListener('change', onNameChange);

function onNameChange(event) {
  console.log('Target:', event.target);
  console.log('Value:', event.target.value);
}

inputName.onkeydown = (event) => {
  if(event.key == 2) {
  }
} 

inputName.onkeyup = function(event) {
  console.log(event)
} 

form.onmouseenter = () => {
  document.body.style.backgroundColor = "#fafafa";
}


form.onmouseleave = () => {
  document.body.style.backgroundColor = "#fafafa";
}

function metodoClick(){ 
   	document.miFormulario.miCheck.click();
} 


// DOM
const perfilesDeRiesgo = document.querySelectorAll('.perfil');
const plazosDeInversion = document.querySelectorAll('.plazo');
const botonBuscar = $('#btnBuscar');

const URLJSON = "./datosIniciales.json";

// AJAX y Jquery
function crearDatosIniciales() {
  $.get(URLJSON, function (respuesta, estado) {
    if (estado === "success") {
      let datosIniciales = respuesta;
      for (const dato of datosIniciales) {
        $("#contenedorBuscador").append(`<div class="fondo">${dato.nombre}</div>`);
      }
    }
  })
}

// animación
function mostrarTituloConAnimacion () {
  $('#fondos_title').fadeIn()
}

function ocultarTituloConAnimacion () {
  $('#fondos_title').fadeOut();
}


$('document').ready(mostrarTituloConAnimacion);

$('document').ready(crearDatosIniciales);


// Función constructora de objetos
function FondoModelo (id, nombre, moneda, perfil, plazoRecomendado) {
  this.id = id;
  this.nombre = nombre;
  this.moneda = moneda;
  this.perfil = perfil;
  this.plazoRecomendado = plazoRecomendado;
}

// Creando Objetos
const fondo1 = new FondoModelo( 1, "Marcos Bondoni", "Pesos", "INVESTIGACIÓN", 1);
const fondo2 = new FondoModelo( 2, "Beatriz Gomez", "Dolar", "MONOGRAFÍA", 90);
const fondo3 = new FondoModelo( 3, "Lucía Perez", "Pesos", "INVESTIGACIÓN", 30);
const fondo4 = new FondoModelo( 4, "Carlos Mendez", "Pesos", "INVESTIGACIÓN", 90);
const fondo5 = new FondoModelo( 5, "Lucas Martinez", "Pesos", "MONOGRAFÍA", 365);
const fondo6 = new FondoModelo( 6, "Cecilia Mateo", "Pesos", "INVESTIGACIÓN", 365);
const fondo7 = new FondoModelo( 7, "Carolina Lambrinda", "Pesos", "MONOGRAFÍA", 365);
const fondo8 = new FondoModelo( 8, "Dolores Pino", "Dolar", "MONOGRAFÍA", 365);
const fondo9 = new FondoModelo( 9, "Lambrida César", "Dolar", "MONOGRAFÍA", 365);
const fondo10 = new FondoModelo( 10, "Osvaldo Pistán", "Pesos", "INVESTIGACIÓN", 365);
const fondo11 = new FondoModelo( 11, "Castrida Mondil", "Pesos", "MONOGRAFÍA", 365);
const fondo12 = new FondoModelo( 12, "Joaquín Iriondo", "Pesos", "OTRO", 365);
const fondo13 = new FondoModelo( 13, "Mario Varela", "Pesos", "OTRO", 1095);
const fondo14 = new FondoModelo( 14, "Matías Teje", "Pesos", "MONOGRAFÍA", 365);
const fondo15 = new FondoModelo( 15, "José Sitek", "Pesos", "INVESTIGACIÓN", 180);
const fondo16 = new FondoModelo( 16, "Cachi Paloma", "Pesos", "OTRO", 730);
const fondo17 = new FondoModelo( 17, "Carlota Páez", "Pesos", "MONOGRAFÍA", 270);
const fondo18 = new FondoModelo( 18, "Mirinda Manzana", "Pesos", "MONOGRAFÍA", 365);
const fondo19 = new FondoModelo( 19, "Elba Llenato", "Pesos", "MONOGRAFÍA", 365);
const fondo20 = new FondoModelo( 20, "Carlita López", "Dolar", "OTRO", 730);
const fondo21 = new FondoModelo( 21, "Meme Bouquet", "Dolar", "OTRO", 1095);
const fondo22 = new FondoModelo( 22, "Jesús Yañez", "Dolar", "OTRO", 730);
const fondo23 = new FondoModelo( 23, "Ximena López", "Dolar", "OTRO", 1095);
const fondo24 = new FondoModelo( 24, "Sabela Miracle", "Pesos", "OTRO", 730);


const fondos = [fondo1, fondo2, fondo3, fondo4, fondo5, fondo6, fondo7, fondo8, fondo9, fondo10, fondo11, fondo12, fondo13, fondo14, fondo15, fondo16, fondo17, fondo18, fondo19, fondo20, fondo21, fondo22, fondo23, fondo24];


let entradaPerfilUsuarioValor = function () {
  let perfil;

  perfilesDeRiesgo.forEach(perfilCorrexioner => {
    if(perfilCorrexioner.checked) {
      perfil = perfilCorrexioner.value;
    }
  });

  return perfil;
}

let entradaplazoDeCorreccionesValor = function () {
  let plazo;

  plazosDeInversion.forEach(plazoDeCorrecciones => {
    if(plazoDeCorrecciones.checked) {
      plazo = plazoDeCorrecciones.value;
    }
  });

  return plazo;
}

// Activando funciones al dar click al botón buscar
botonBuscar.click(ocultarTituloConAnimacion);
botonBuscar.click(mostrarTituloConAnimacion);
botonBuscar.click(buscarFondoSegunEleccionUsuario);

function obtenerFondosINVESTIGACIÓNMenorIgual1Año() {
  let fondosINVESTIGACIÓNMenorIgual1Año = fondos
    .filter(fondo => fondo.perfil === "INVESTIGACIÓN")
    .filter(fondo => fondo.plazoRecomendado <= 365);

   let plantillafondosINVESTIGACIÓNMenorIgual1Año = '';
  
   fondosINVESTIGACIÓNMenorIgual1Año.forEach(fondo => {
     plantillafondosINVESTIGACIÓNMenorIgual1Año += `
       <div class="fondo">${fondo.nombre}</div>
     `;
   });
 
   document.getElementById('contenedorBuscador').innerHTML = plantillafondosINVESTIGACIÓNMenorIgual1Año;
}


function obtenerfondosINVESTIGACIÓNMayorIgual3Años() {
  let fondosINVESTIGACIÓNMayorIgual3Años = fondos
    .filter(fondo => fondo.perfil === "INVESTIGACIÓN")
    .filter(fondo => fondo.plazoRecomendado >= 1095);

   let plantillafondosINVESTIGACIÓNMayorIgual3Años = '';
  
   fondosINVESTIGACIÓNMayorIgual3Años.forEach(fondo => {
     plantillafondosINVESTIGACIÓNMayorIgual3Años += `
       <div class="fondo">${fondo.nombre}</div>
     `;
   });
 
   document.getElementById('contenedorBuscador').innerHTML = plantillafondosINVESTIGACIÓNMayorIgual3Años;
}


function obtenerFondosMONOGRAFÍAMenorIgual1Año() {
  let fondosMONOGRAFÍAMenorIgual1Año = fondos
    .filter(fondo => fondo.perfil === "MONOGRAFÍA")
    .filter(fondo => fondo.plazoRecomendado <= 365);

  let plantillafondosMONOGRAFÍAMenorIgual1Año = '';
  
  fondosMONOGRAFÍAMenorIgual1Año.forEach(fondo => {
    plantillafondosMONOGRAFÍAMenorIgual1Año += `
      <div class="fondo">${fondo.nombre}</div>
    `;
  });

  document.getElementById('contenedorBuscador').innerHTML = plantillafondosMONOGRAFÍAMenorIgual1Año;
}


function obtenerfondosMONOGRAFÍAMayorIgual1AñoMenorIgual3Años() {
  let fondosMONOGRAFÍAMayorIgual1AñoMenorIgual3Años = fondos
    .filter(fondo => fondo.perfil === "MONOGRAFÍA")
    .filter(fondo => fondo.plazoRecomendado >= 365 && fondo.plazoRecomendado <= 1095);

  let plantillafondosMONOGRAFÍAMayorIgual1AñoMenorIgual3Años = '';
  
  fondosMONOGRAFÍAMayorIgual1AñoMenorIgual3Años.forEach(fondo => {
    plantillafondosMONOGRAFÍAMayorIgual1AñoMenorIgual3Años += `
      <div class="fondo">${fondo.nombre}</div>
    `;
  });

  document.getElementById('contenedorBuscador').innerHTML = plantillafondosMONOGRAFÍAMayorIgual1AñoMenorIgual3Años;
}


function obtenerfondosMONOGRAFÍAMayorIgual3Años() {

  let fondosMONOGRAFÍAMayorIgual3Años = fondos
    .filter(fondo => fondo.perfil === "MONOGRAFÍA")
    .filter(fondo => fondo.plazoRecomendado >= 1095);

  let plantillafondosMONOGRAFÍAMayorIgual3Años = '';
  
  fondosMONOGRAFÍAMayorIgual3Años.forEach(fondo => {
    plantillafondosMONOGRAFÍAMayorIgual3Años += `
      <div class="fondo">${fondo.nombre}</div>
    `;
  });

  document.getElementById('contenedorBuscador').innerHTML = plantillafondosMONOGRAFÍAMayorIgual3Años;
}

function obtenerFondosOTROMenorIgual1Año() {
  let fondosOTROMenorIgual1Año = fondos
    .filter(fondo => fondo.perfil === "OTRO")
    .filter(fondo => fondo.plazoRecomendado <= 365);

  let plantillafondosOTROMenorIgual1Año = '';
  
  fondosOTROMenorIgual1Año.forEach(fondo => {
    plantillafondosOTROMenorIgual1Año += `
      <div class="fondo">${fondo.nombre}</div>
    `;
  });

  document.getElementById('contenedorBuscador').innerHTML = plantillafondosOTROMenorIgual1Año;
}

function obtenerfondosOTROMayorIgual1AñoMenorIgual3Años() {
  let fondosOTROMayorIgual1AñoMenorIgual3Años = fondos
    .filter(fondo => fondo.perfil === "OTRO")
    .filter(fondo => fondo.plazoRecomendado >= 365 && fondo.plazoRecomendado <= 1095);

  let plantillafondosOTROMayorIgual1AñoMenorIgual3Años = '';
  
  fondosOTROMayorIgual1AñoMenorIgual3Años.forEach(fondo => {
    plantillafondosOTROMayorIgual1AñoMenorIgual3Años += `
      <div class="fondo">${fondo.nombre}</div>
    `;
  });

  document.getElementById('contenedorBuscador').innerHTML = plantillafondosOTROMayorIgual1AñoMenorIgual3Años;
}

function obtenerfondosOTROMayorIgual3Años() {
  let fondosOTROMayorIgual3Años = fondos
    .filter(fondo => fondo.perfil === "OTRO")
    .filter(fondo => fondo.plazoRecomendado >= 1095);
  document.getElementById('contenedorBuscador').innerHTML = plantillafondosOTROMayorIgual3Años;
}

function mostrarUnMensajeDeFallo() {
  const contenedorBuscador = document.getElementById('contenedorBuscador');

  let mensajeFallo = `
    <p style="color:#be7ba8;width:auto">¡Lo sentimos! no hay docentes disponibles para esas categorías.</p>
  `
  contenedorBuscador.innerHTML = mensajeFallo;
}


function buscarFondoSegunEleccionUsuario() {
  if (entradaPerfilUsuarioValor() === "INVESTIGACIÓN" && entradaplazoDeCorreccionesValor() === "corto") {
    obtenerFondosINVESTIGACIÓNMenorIgual1Año();
  }
  else if (entradaPerfilUsuarioValor() === "INVESTIGACIÓN" && entradaplazoDeCorreccionesValor() === "mediano") {
    obtenerfondosINVESTIGACIÓNMayorIgual1AñoMenorIgual3Años();
  }
  else if (entradaPerfilUsuarioValor() === "INVESTIGACIÓN" && entradaplazoDeCorreccionesValor() === "largo") {
    mostrarUnMensajeDeFallo();
  }
  else if (entradaPerfilUsuarioValor() === "MONOGRAFÍA" && entradaplazoDeCorreccionesValor() === "corto") {
    obtenerFondosMONOGRAFÍAMenorIgual1Año();
  }
  else if (entradaPerfilUsuarioValor() === "MONOGRAFÍA" && entradaplazoDeCorreccionesValor() === "mediano") {
    obtenerfondosMONOGRAFÍAMayorIgual1AñoMenorIgual3Años();
  }
  else if (entradaPerfilUsuarioValor() === "MONOGRAFÍA" && entradaplazoDeCorreccionesValor() === "largo") {
    mostrarUnMensajeDeFallo();
  }
  else if (entradaPerfilUsuarioValor() === "OTRO" && entradaplazoDeCorreccionesValor() === "corto") {
    obtenerFondosOTROMenorIgual1Año();
  }
  else if (entradaPerfilUsuarioValor() === "OTRO" && entradaplazoDeCorreccionesValor() === "mediano") {
    obtenerfondosOTROMayorIgual1AñoMenorIgual3Años();
  }
  else if (entradaPerfilUsuarioValor() === "OTRO" && entradaplazoDeCorreccionesValor() === "largo") {
    obtenerfondosOTROMayorIgual3Años();
  }
  else {
    mostrarUnMensajeDeFallo();
  }
}