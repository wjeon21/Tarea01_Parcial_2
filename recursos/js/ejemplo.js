window.addEventListener('scroll', function(){
    let altoPantalla = window.innerHeight;
    let anchoPantalla = window.innerWidth;
    console.log ('El tamaño de la pantalla es: ' + altoPantalla + ' - '
    + anchoPantalla );

    let objeto = document.getElementById('verP');
    let posicionObj = objeto.getBoundingClientRect().top;
    console.log ('posicion del objeto: ' + posicionObj);

    if (altoPantalla > posicionObj) {
        objeto.style.backgroundColor = 'orange';
    }
} );