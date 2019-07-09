// --- ESTO ES TODO LO RELACIONADO A LA PRIMERA PANTALLA --- //
// declarando variables //
const password = document.getElementById('pw');
const submit = document.getElementById('sbmt');
const newParagraph = document.getElementById('alert');

//variable de vistas 
const loginn = document.getElementById('login');
const view_one = document.getElementById('view-one');

// asignando contador de intentos //
let counter = 0;

// jalando datos de contraseña //
submit.addEventListener('click', () => {
  if (password.value === 'L') {
    // alert('hola');
    loginn.classList.add('hide');
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

//--- ACA VA TODO LO RELACIONADO A LA SEGUNDA PANTALLA --- //
// declaracion de data //
const peruData = WORLDBANK.PER.indicators;
const mexicoData = WORLDBANK.MEX.indicators;
const chileData = WORLDBANK.CHL.indicators;
const brazilData = WORLDBANK.BRA.indicators;


// declaracion de vistas del menu PAISES //
const peruOption = document.getElementById('peruMenu');
const mexicoOption = document.getElementById('mexicoMenu');
const chileOption = document.getElementById('chileMenu');
const brazilOption = document.getElementById('brazilMenu');

// declaracion y ocultar despliegue de paises //
const peruView = document.getElementById('peru');
const mexicoView = document.getElementById('mexico');
const chileView = document.getElementById('chile');
const brazilView = document.getElementById('brazil');
const peruPercentage = document.getElementById('peruPercent')

//ocultar vistas de despliegue de pais //
peruView.classList.add('hide');
mexicoView.classList.add('hide');
chileView.classList.add('hide');
brazilView.classList.add('hide');

// funcionalidad de las vistas //
peruOption.addEventListener("click", () =>{
  peruView.classList.remove('hide');
  mexicoView.classList.add('hide');
  chileView.classList.add('hide');
  brazilView.classList.add('hide');
})

mexicoOption.addEventListener("click", () =>{
  peruView.classList.add('hide');
  mexicoView.classList.remove('hide');
  chileView.classList.add('hide');
  brazilView.classList.add('hide');
})

chileOption.addEventListener("click", () =>{
  peruView.classList.add('hide');
  mexicoView.classList.add('hide');
  chileView.classList.remove('hide');
  brazilView.classList.add('hide');
})

brazilOption.addEventListener("click", () =>{
  peruView.classList.add('hide');
  mexicoView.classList.add('hide');
  chileView.classList.add('hide');
  brazilView.classList.remove('hide');
})

const showData = (data) => {
  let show = '';
  for (let i=0; i<data.length; i++) {
    let call = `<li><a href=""> ${data[i].indicatorName} </a></li>`;

    show += call
  }
  return show;
};

peru.innerHTML = showData(peruData);
mexico.innerHTML = showData(mexicoData);
chile.innerHTML = showData(chileData);
brazil.innerHTML = showData(brazilData);

//ORDENANDO INDICADORES
const indicadorAsc = document.getElementById('indi-asc');
const indicadorDsc = document.getElementById('indi-dsc');

const information = Object.values(WORLDBANK.PER.indicators);
const newData = () => {
  let newArray = [];
  for (let i=0; i<information.length; i++) {
  newArray.push({
    year: Object.keys(information[i].data),
    percentage: Object.values(information[i].data)
  })
//console.log(newArray);
dataStorage = newArray;
  }
}
newData();
const information = Object.keys(WORLDBANK.PER.indicators[0].data);
const porcentaje = Object.values(WORLDBANK.PER.indicators[0].data);
const nuevaData = () => {
  let arreglo = [];
  for (let i=0; i<information.length; i++) {
  arreglo.push(information[i],porcentaje[i])
}
console.log(arreglo);
return arreglo;
}
nuevaData();

indicadorAsc.innerHTML = nuevaData(peruData);
  
  
  




/*
const newData = () => {
  let newArray = [];
  for (let i=0; i<information.length; i++) {
  newArray.push({
    year: Object.keys(information[i].data),
    percentage: Object.values(information[i].data)
  })
console.log(newArray);
  }
}
newData();
*/
