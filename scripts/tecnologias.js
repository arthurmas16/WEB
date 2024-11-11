document.getElementById("quiz")
.addEventListener('submit', checkquiz)

function checkquiz(event){
event.preventDefault();
var p1respuestas = document.getElementsByName("p1")
var imgCheckp1 = document.getElementById("checkImg1")
var checkp1 = false

  if (p1respuestas[0].checked)
    checkp1 = true
  
}
if (checkp1){
  imgCheckp1.src="../Media/checked.jpg"
}else{imgCheckp1.src="../Media/wrong.jpg"}

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

function cleanImages(){
var images = document.getElementsByClassName("checkImgs")
for (i = 0; i < images.length; i++){
  images[i].style.visibility = 'hidden'
  images[i].style
}
}
