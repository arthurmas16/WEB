document.getElementById("quiz")
.addEventListener('submit', checkquiz)

// Comprueba si las soluciones están bien al darle a comprobar
function checkquiz(event){ 
  event.preventDefault();
  //Almaceno las respuestas de la primera pregunta
  var p1respuestas = document.getElementsByName("p1")
  //Almacena la imagene que va a mostrar en la primera pregunta
  var imgCheckp1 = document.getElementById("checkImg1")
  // por defecto es falso
  var checkp1 = false
  //si la respuesta es la primera sale la imagen de tick
  if (p1respuestas[0].checked){
    checkp1 = true
  }
  
  //salen las imagenes si esta bien o mal la respuesta
  if (checkp1){
    imgCheckp1.src="../Media/checked.jpg"
  }
  else{
    imgCheckp1.src="../Media/wrong.jpg"

  }
  //
  var p2respuestas = document.getElementsByName("p2")
  var imgElement = document.getElementById("checkImg2")
    for (i=0; i<checkp1respuesta.length;i++){
      if (!checkp1respuesta[i].checked){
      checkp1 = false
      }

  if (p2respuestas[0].checked){
    imgElement.src="../Media/checked.jpg"
  }else{imgElement.src="../Media/wrong.jpg"}


  var images = document.getElementsByClassName("checkImgs")
  for (i = 0; i < images.length; i++){
    images[i].style.visibility = 'visible'
  }

  }
}
function cleanImages(){
var images = document.getElementsByClassName("checkImgs")
for (i = 0; i < images.length; i++){
  images[i].style.visibility = 'hidden'
  images[i].style
}
}

