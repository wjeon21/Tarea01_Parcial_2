window.addEventListener('scroll', function () {

    let altoPantalla = window.innerHeight;
    console.log ('alto pantalla ' + altoPantalla);

    let scrollRecorrido = document.documentElement.scrollTop;

    console.log ('Scroll recorrido ' + scrollRecorrido);

    let listaDetalle = document.querySelectorAll('#secDetalles article');
    //Aplicar la funcionalidad a cada Detalle, usando el forEach
    listaDetalle.forEach (function(item, index, listado){
        let alturaArticle = listado[index].offsetTop;
        console.log ('Posicion Supeior ' + index + '::' + alturaArticle);

        if ((alturaArticle*0.6) < scrollRecorrido) {
            listado[index].style.opacity = '1';
        }
    });

   /* //Ejemplo ciclo for
    for (let i=0; i< listaDetalle.length; i++ ){
        let alturaArticle = listado[i].offsetTop;
        console.log ('Posicion Supeior ' + i + '::' + alturaArticle);

        if ((alturaArticle*0.6) < scrollRecorrido) {
            listado[i].style.opacity = '1';
        }
    }

    //Ejemplo while
    let i=0
    while (i< listaDetalle.length){
        let alturaArticle = listado[i].offsetTop;
        console.log ('Posicion Supeior ' + i + '::' + alturaArticle);

        if ((alturaArticle*0.6) < scrollRecorrido) {
            listado[i].style.opacity = '1';
    }
    i++;
    }*/

});

