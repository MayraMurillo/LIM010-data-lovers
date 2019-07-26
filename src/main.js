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

datos = WORLDBANK;
arrDatos = Object.values(WORLDBANK);

//Contador de intentos: 
const obtenerClick = document.getElementById('sbmt');
const contraseña = document.getElementById('pw');
const usuario = document.getElementById('email');
let cuenta = 2;
obtenerClick.addEventListener('click', () => {
  if (contraseña.value === '1' && usuario.value === '1') {
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
const mostrarIndicador = (callIndicadorPais) => {
  let string = '';
  for (let i = 0; i < callIndicadorPais.length; i++) {
    string += `<li id=${i}>${callIndicadorPais[i]}</li>`;
    // string += `<li><a href="#" <li id=${i}>${callIndicadorPais[i]}></a></li>`
  }
  console.log(string)
  return string;
};

let paisSeleccionado = '';
seleccionarPais.addEventListener('change', (event) => {
  document.getElementById('view-three').classList.remove('ocultar');
  document.getElementById('view-two').classList.add('ocultar');

  paisSeleccionado = event.target.value;
  console.log(event.target.value);
  console.log(indicadorPaises(datos, paisSeleccionado));
  indicadorporPaises.innerHTML = mostrarIndicador(indicadorPaises(datos, paisSeleccionado));
  return paisSeleccionado;
});

indicadorporPaises.addEventListener('click', (event) => {
  let nombreIndicadoryCodPais = event.target.id;
  const dataa = datos[paisSeleccionado].indicators[nombreIndicadoryCodPais].data;
  const arrayData = Object.entries(dataa);
  console.log(datos[paisSeleccionado].indicators[nombreIndicadoryCodPais].data);

  let templateTable = `
 <tr>
   <th>Año</th>
   <th>Porcentaje</th> 
 </tr>`;
  let tablaDatos = document.getElementById('tablas');


  for (let i = 0; i < arrayData.length; i++) {
    if (arrayData[i][1] !== '') {
      templateTable += `<tr>
     <td>${arrayData[i][0]}</td>
     <td>${parseInt(arrayData[i][1]).toFixed(2)}%</td>
   </tr>`
    }

    const indicadores = document.getElementById('nombreIndicador');
    indicadores.innerHTML = nombreIndicadoryCodPais;
    indicadorporPaises.classList.add('hide');
    tablaDatos.innerHTML = templateTable;
  }

});

