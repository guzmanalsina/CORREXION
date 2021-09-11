//Empieza a aparecer de forma gradual, hasta estar completamente visible

$(document).ready(function(){
$('div77').prepend(`<div77> 
<a style="font-size:2rem;color:#C2185B"><strong>Aprender es vivir</strong></a>
<br>
<p3>Tu mejor opción</p3>
<p><em>Escribir es encontrarse con las cosas. A cada frase que escribo, más cerca me encuentro de mí.</em></p>
<img src="./images/maquina.jfif" style= "height:25rem;">
<img src="./images/muj.jfif" style= "height:25rem;">
<img src="./images/text.jfif" style= "height:25rem;">
<img src="./images/people.jfif" style= "height:25rem;">
</div77>`
);

$('div1').fadeIn();
$('img').fadeIn(1000);
$('p3').fadeOut(1000);
})

//Cambia a blanco el logo correxioner al hacer click en enviar

  $('#btnCargar').click(function(){
    $('h1').fadeIn(3000, function(){
      $('h1').css("color","black");
    });
  });

  $('#btnCargar').click(function(){
    $('div.card.p-3').fadeIn(3000, function(){
      $('div.card.p-3').css("background-color","pink");
      $('div.card.m-2').css("background-color","white");
    });
  });

 $('#btnShow').click(function(){
   $('h1').show();
  });

//Desaparece el buscador

  $("#searchBtn").click(() => { 
    $(".row").toggle("fast");
});

  $('body').append('<button id="btnToggle" class="btn btn-light" style="margin-top:6rem;margin-bottom:1rem">¡GRACIAS!</button>');

  $('body').append(`<div id="div1" style="background: #FF0080; height: 30px ; margin: 50px"> </div>`)

    $('#btnToggle').click(() => {
    $('#div1').toggle(4000);
  });

    $('#elegir').animate({
    opacity: '0.8',
    height: 'auto',
    width: 'auto',
    borderRadius: '60%' 
  }, 3000, function(){
    $('#elegir').css("backgroundColor", "pink")
  })



$(document).ready(function(){
  $('div5').prepend(`
  <div5> 
    <div class="contenedor">
      <img src="https://images.unsplash.com/photo-1490735891913-40897cdaafd1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
      <h7 class="texto-encima"> </h7>
    <div class="centrado">
      <p>GUÍA PARA ESCRIBIR UNA NOTA</p>
    <ul>
      <li>1- Los títulos se conjugan en pasado o en futuro.</li>
      <li>2- La bajada debe responder a las 6 preguntas.</li>
      <li>3- No se escribe todo con mayúsculas.</li>
      <li>4- Respetá la regla Sujeto + Verbo + Predicado.</li>
      <li>5- Seguí el concepto de Pirámide invertida.</li>
      <li>6- Escribí de manera atractiva para llamar atención.</li>
    </ul>
    </div>
  </div>
    </div5>`
  );
}
)

$(document).ready(function(){
  $('footer').prepend(`
  <footer class="footer"> 
            <div>
                <p class="footer__thanks">thanks for supporting us :)</p> 
            </div>
            <br> <br>
                    <div>
                        <div>
                            <div class="margenes-location1">
                                <h3><strong>¡CONTÁCTANOS!</strong></h3>
                                <br>
                                <p>Si deseas más información, dejanos un mensaje con tus datos a través de:</p>
                                <button class="btn btn-light"><img src="./images/face.png" alt="" width="20px"><a href="https://www.facebook.com/TitiiGuzman/" style="text-decoration:none;color:black">Facebook</a></button>
                                <button class="btn btn-light"><img src="./images/insta.png" alt="" width="25px"><a href="https://www.instagram.com/mbeatrizguzman/" style="text-decoration:none;color:black"> Instagram</a></button>
                                <p>También puedes escribir a nuestro whatsapp:</p>
                                <div>
                                    <img src="./images/whatsapp.png" alt="" width="25px"><a href="https://api.whatsapp.com/send?phone=5493875048686&text=BIENVENIDO%20CORREXIONER%20(%20%CD%A1%E0%B2%A0%20%E1%B4%97%20%CD%A1%E0%B2%A0)" style="text-decoration:none;color:black"> +54 9 3516 06-3195</a>
                                </div>
                                <br>
                                <p>Escríbenos, ¡queremos conocerte!</p>
                            </div>
                        </div>
                    </div>
            </footer>`
  );
}
)

$(document).ready(function(){
  $('div2').prepend(`
  <div2>
  <img class="line2">
<p class="pobreza">#LosMejoresTips</p>
<div>
    <img class="line2">
  </div2>`
  );
}
)

$(document).ready(function(){
  $('div3').prepend(`
  <div3>
  <img src="./images/border1.png">
<p class="pobreza">¿Cómo trabajamos?</p>
<div3>
    <img class="line2">
  </div3>`
  );
}
)

//carrusel
window.onload = function () {
  // Variables
  const IMAGENES = [
      'images/book.jfif',
      'images/welcome.jfif',
      'images/smile.jfif'
  ];
  const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;
  let posicionActual = 0;
  let $botonRetroceder = document.querySelector('#retroceder');
  let $botonAvanzar = document.querySelector('#avanzar');
  let $imagen = document.querySelector('#imagen');
  let $botonPlay = document.querySelector('#play');
  let $botonStop = document.querySelector('#stop');
  let intervalo;

  function pasarFoto() {
      if(posicionActual >= IMAGENES.length - 1) {
          posicionActual = 0;
      } else {
          posicionActual++;
      }
      renderizarImagen();
  }

  function retrocederFoto() {
      if(posicionActual <= 0) {
          posicionActual = IMAGENES.length - 1;
      } else {
          posicionActual--;
      }
      renderizarImagen();
  }

  function renderizarImagen () {
      $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
  }

  function playIntervalo() {
      intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
      $botonAvanzar.setAttribute('disabled', true);
      $botonRetroceder.setAttribute('disabled', true);
      $botonPlay.setAttribute('disabled', true);
      $botonStop.removeAttribute('disabled');

  }

  function stopIntervalo() {
      clearInterval(intervalo);
      $botonAvanzar.removeAttribute('disabled');
      $botonRetroceder.removeAttribute('disabled');
      $botonPlay.removeAttribute('disabled');
      $botonStop.setAttribute('disabled', true);
  }

  // Eventos
  $botonAvanzar.addEventListener('click', pasarFoto);
  $botonRetroceder.addEventListener('click', retrocederFoto);
  $botonPlay.addEventListener('click', playIntervalo);
  $botonStop.addEventListener('click', stopIntervalo);
  // Iniciar
  renderizarImagen();
} 

$(document).ready(function(){
  $('div4').prepend(`
  <div4>
  <h5>¡Bienvenidos a Correxión! Una página dedicada al servicio de la redacción. </h5>
  <p>¿Tenés algun texto que buscás saber si está correcto?</p>
  <p>¿Sentís que te cuesta la gramática?</p>
  <p>¿Cómo vas con la puntuación?</p>
  <p>¡Este lugar es para vos!</p>
  <img src="./images/iconflecha.png" width="30px">
  </div4>`
  );
}
)

