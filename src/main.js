// declarando variables //
const password = document.getElementById('pw');
const submit = document.getElementById('sbmt');
const newParagraph = document.getElementById('alert');


// asignando contador //
let counter = 0;

// jalando datos de contraseña //
submit.addEventListener('click', ()=>{
  if (password.value === 'LABORATORIA') {
    alert('hola');
    counter = 0;
  } else if (counter < 2) {
    counter++; 
    newParagraph.innerHTML = 'Contraseña errada, tenga cuidado. Sólo tiene 3 intentos';
  } else { 
    newParagraph.innerHTML = 'ACCESO DENEGADO'; 
  }
});