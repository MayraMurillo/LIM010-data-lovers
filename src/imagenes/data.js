const mostrarIndicador = (callIndicadorPais) =>{
  let string = '';
  for (let i=0; i<callIndicadorPais.length; i++){
   string += `<li id=${i}>${callIndicadorPais[i]}</li>`;
  }
  return string;
};

const indicadorPaises = (data, pais) =>{
  let arrIndicadores = [];
  let indicadores = data[pais].indicators;
  for (let i=0; i<indicadores.length; i++){
     arrIndicadores.push(indicadores[i]['countryCode'] + " " + indicadores[i]['indicatorName'] );
  }
  return arrIndicadores;
};

// funcion par ordenar datos del inidicador selccionado en ascendente y descendente
const formulaOrdenar = (objectData) => {
  const arrayIndicador = Object.entries(objectData);
  return arrayIndicador.sort((prev, next) => {
    return prev[1] - next[1];
  }};


  


window.worldbank = {
  indicadorPaises: indicadorPaises,
  mostrarIndicador: mostrarIndicador,
  formulaOrdenar : formulaOrdenar,
};