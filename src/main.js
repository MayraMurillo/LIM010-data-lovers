    // --- ESTO ES TODO LO RELACIONADO A LA PRIMERA PANTALLA --- //
// declarando variables //
const newParagraph = document.getElementById('alert');
const carrucel = document.getElementById('slider');
//variable de vistas
const view_one = document.getElementById('view-one');
const numInicial = document.getElementById('year_one');
const numFinal = document.getElementById('year_two');
const btnBuscar = document.getElementById('buscador');
const loginn = document.getElementById('login');
const seleccionarPais = document.getElementById('select-pais');
const indicadorporPaises = document.getElementById('pais-Peru');
const tablasIndicador = document.getElementById('tablas');
const showNombreIndicador = document.getElementById('nombreIndicador');
const order = document.getElementById('ordenar');
const tablasOrder = document.getElementById('tablasOrdenadas');
const tablasFiltradas = document.getElementById('tablasFiltradas');

datos = WORLDBANK;
arrDatos = Object.values(WORLDBANK);

//Contador de intentos: 
const obtenerClick = document.getElementById('sbmt');
const contraseña = document.getElementById('pw');
const usuario = document.getElementById('email');
let cuenta = 2;
obtenerClick.addEventListener('click', () => {
  if (contraseña.value === '' && usuario.value === '') {
    document.getElementById('login').classList.add('ocultar');
    document.getElementById('view-two').classList.remove('ocultar');
    document.getElementById('view-one').classList.remove('ocultar');
    contraseña.value = '';
    usuario.value = '';
  } else if (cuenta === 0) {
    document.getElementById('pantalla-bloqueo').classList.remove('ocultar');
    document.getElementById('login').classList.add('ocultar');
    contraseña.value = '';
  } else {
    newParagraph.innerHTML = 'Contraseña errada, tenga cuidado. Sólo tiene 3 intentos';
    contraseña.value = '';
    cuenta--;
  }
});


let paisSeleccionado = '';
seleccionarPais.addEventListener('change', (event) => {
  document.getElementById('view-three').classList.remove('ocultar');
  document.getElementById('view-two').classList.add('ocultar');
  paisSeleccionado = event.target.value;
  indicadorporPaises.innerHTML = mostrarIndicador(indicadorPaises(datos, paisSeleccionado));
  return paisSeleccionado;
});

indicadorporPaises.addEventListener('click', (event) => {
  let indexIndicador = event.target.id;
  let indicadorNombre = datos[paisSeleccionado].indicators[indexIndicador].indicatorName;
  const dataa = datos[paisSeleccionado].indicators[indexIndicador].data;
  const arrayData = Object.entries(dataa);

  let templateTable = `
 <tr>
   <th>Año</th>
   <th>Porcentaje</th> 
 </tr>`;

  let tablaDatos = document.getElementById('tablas');


  for (let i = 0; i < arrayData.length; i++) {

    if(arrayData[i][1] == "") {
    }
    else {
      templateTable += `<tr>
     <td>${arrayData[i][0]}</td>
     <td>${parseInt(arrayData[i][1]).toFixed(2)}%</td>
   </tr>`
  }    
  }
    indicadorporPaises.classList.add('hide');
    showNombreIndicador.innerHTML = indicadorNombre;
    tablaDatos.innerHTML = templateTable;

    ordenar.addEventListener('change', (event) => {
    let selectOrder = event.target.value;

    //ORDENAR DE MENOR A MAYOR //
    arrayData.sort(function (a, b) {
      if (a[1] > b[1]) {
        return 1;
      }
      else 
        return -1;
    });

    let templateTable = `
    <tr>
      <th>Año</th>
      <th>Porcentaje</th> 
    </tr>`;

    if (selectOrder === "ascendente"){
      for (let i = 0; i < arrayData.length; i++) {
        if(arrayData[i][1] == "") {
        }
        else {

      templateTable += `<tr>
      <td>${arrayData[i][0]}</td>
      <td>${parseInt(arrayData[i][1]).toFixed(2)}%</td>
    </tr>`
        }

        
    tablasOrder.innerHTML = templateTable;
tablaDatos.classList.add('hide');
   }
   }

  
   //ORDENAR DE MAYOR A MENOR //
   arrayData.sort(function (a, b) {
    if (a[1] < b[1]) {
      return 1;
    }
    else 
      return -1;
  });

  if (selectOrder === "descendente"){
    for (let i = 0; i < arrayData.length; i++) {
      if(arrayData[i][1] == "") {
      }
      else {

    templateTable += `<tr>
    <td>${arrayData[i][0]}</td>
    <td>${parseInt(arrayData[i][1]).toFixed(2)}%</td>
  </tr>`
      }

      
  tablasOrder.innerHTML = templateTable;
  tablaDatos.classList.add('hide');
 }
 }


});
/*
const filtrar = document.getElementById('buscador');
filtrar.addEventListener('click', (event) => {
  const inicial = document.getElementById('year_one');
  console.log(inicial.value)
  const final = document.getElementById('year_two');
  console.log(final.value)
  let tablaDatos = document.getElementsByTagName('tr');
  const dataa = datos[paisSeleccionado].indicators[indexIndicador].data;
  console.log(dataa)
  const arrayData = Object.entries(dataa);
  console.log(arrayData)
  const años = Object.keys(dataa);
  const porcentajes = Object.values(dataa);
  console.log(años)
  console.log(porcentajes)

  let templateTable1 = '';

 for(let i=0; i<años.length; i++){
   if(años >= inicial && años <= final)

   templateTable1 = `
      <tr>
        <th>Año</th>
        <th>Porcentaje</th> 
      </tr>`;
        templateTable1 += `<tr>
        <td>${años[i]}</td>
        <td>${parseInt(porcentajes[i]).toFixed(2)}%</td>
        </tr>`
        }
   
        
tablasFiltradas.innerHTML = templateTable1;      
      
 });
  */
});



