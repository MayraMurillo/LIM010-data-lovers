const paises = (data) =>{
  const arrPaises = [];
  for (let i=0; i<arrDatos.length; i++){
    arrPaises.push(arrDatos[i].countryName);
  }
  return arrPaises;
};

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



window.worldbank = {
  paises: paises,
  indicadorPaises: indicadorPaises,
  mostrarIndicador: mostrarIndicador,
};