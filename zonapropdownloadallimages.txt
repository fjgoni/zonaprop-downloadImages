IR A LA PAGINA DE ZONA PROP Y CUANDO TENGAS LA PAGINA DE DONDE QUERES DESCARGAR TODAS LAS FOTOS QUE HAYA, 
ABRI LA CONSOLA DE CHROME Y SEGUI LOS SIGUIENTES PASOS

1- var cartasDiv = document.getElementsByClassName("postingCardContent");

2- cartasDiv = [].slice.call(cartasDiv); //Lo transformo en un array para poder iterar sobre el mismo

3- objArr = [];

4- cartasDiv.forEach(x => {
  var imgs = [].slice.call(x.getElementsByClassName('flickity-lazyloaded'));
  var urls = [];
  imgs.forEach(y => {urls.push(y.src)});
   objArr.push(
     {
        images: urls,
        title: x.getElementsByClassName('postingCardTitle')[0].getElementsByClassName('go-to-posting')[0].innerText,
        price: x.getElementsByClassName('firstPrice')[0].innerText
     }
    )
})


5- copy(objArr)

6- copiar y reemplazar los datos adentro del archivo datos.json

7- correr en consola dentro de este directorio node index.js
 (si no tenes los modulos de node antes corre npm install )

8- las imagenes se bajan a la carpeta "downloads"