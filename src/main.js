/* Manejo del DOM */
// declarando variables //
const password = document.getElementById('pw');
const submit = document.getElementById('sbmt');
const newParagraph = document.getElementById('alert');

//variable de vistas 
const loginn = document.getElementById('login');
const view_one = document.getElementById('view-one');
const container = document.getElementById('containerr')


// asignando contador //
let counter = 0;

// jalando datos de contraseña //
submit.addEventListener('click', () => {
  if (password.value === 'LABORATORIA') {
    // alert('hola');
    loginn.classList.add('hide');
    container.classList.add('bodyImage');

    // view_one.classList.replace('hide', 'show');
    view_one.classList.add('show');

    counter = 0;
  } else if (counter < 3) {
    counter++;
    newParagraph.innerHTML = 'Contraseña errada, tenga cuidado. Sólo tiene 3 intentos';
  } else {
    newParagraph.innerHTML = 'ACCESO DENEGADO';
  }
});