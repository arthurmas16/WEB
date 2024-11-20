document.getElementById('test').addEventListener('submit', function (event) {
  event.preventDefault();
  verificarRespuestas();
});

function verificarRespuestas() {  
 
  const checkboxes = Array.from(document.querySelectorAll('input[name="P1"]:checked'));
  const radios = Array.from(document.querySelectorAll('input[name="P2"]:checked'));

  const imagen1 = document.getElementById('imagen1'); 
  const imagen2 = document.getElementById('imagen2'); 
 
 
  imagen1.style.display = 'none';
  imagen2.style.display = 'none';

   
  const opcionesCorrectasP1 = checkboxes.some(checkbox => checkbox.value === 'C')

  const opcionesCorrectasP2 = radios.some(radio => radio.value === 'E');
 
  if (opcionesCorrectasP1) {
      imagen1.src = "../media/checked.jpg";
      imagen1.style.display = 'block';
  } else {  
      imagen1.src = "../media/wrong.jpg";
      imagen1.style.display = 'block';
  }

  
  if (opcionesCorrectasP2) {
      imagen2.src = "../media/checked.jpg";
      imagen2.style.display = 'block';
  } else {  
      imagen2.src = "../media/wrong.jpg";
      imagen2.style.display = 'block';
  }
}

function cleanImages() {

  const imagen1 = document.getElementById('imagen1');
  const imagen2 = document.getElementById('imagen2');
  imagen1.style.display = 'none';
  imagen2.style.display = 'none';
}