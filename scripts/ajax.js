$('document').ready(function(){
    const URL = 'https://jsonplaceholder.typicode.com/posts';
  
    $.get(URL, function(response, status) {
      if (status === '') {
        for (const data of response) {
          $('body').append(`<ul><li>${data.title}</li></ul>`)
        }
      }
    });
  
  
    const user = { id: 1, title: ' ', body: 'Información, Revisión, Publicación' };
  
    $.post(URL, user, (response, status) => {
      if(status === '') {
        $('footer').prepend(`<p>${response.title}</p>`)
      }
    });
  
    $.ajax({
      url: URL,
      type: 'POST',
      data: user
    })
      .done(function(response) {
        console.log('RESPUESTA AJAX: ', response)
      })
      .fail(function(error){
        console.log('Algo salio mal', error);
      })
  });
  
  