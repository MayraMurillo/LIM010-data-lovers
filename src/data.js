const paises = (data) => {
   const arrPaises = [];
   for (let i = 0; i < data.length; i++) {
      arrPaises.push(data[i].countryName);
   }
   return arrPaises;
};

const indicadorPaises = (data, pais) => {
   let arrIndicadores = [];
   let indicadores = data[pais].indicators;
   console.log(data[pais].indicators);
   for (let i = 0; i < indicadores.length; i++) {
      arrIndicadores.push(indicadores[i]['indicatorName']);
   }
   return arrIndicadores;
};

window.worldbank = {
   paises: paises,
   indicadorPaises: indicadorPaises,
   // mostrarIndicador: mostrarIndicador,
};
//de aquiiii
// const paises = (data) =>{
//    const arrPaises = Object.keys(data);
//    return arrPaises;
// };

// const indicadorPaises = (data, pais) =>{
//    let arrIndicadores = [];
//    let indicadores = data[pais].indicators;
//    for (let i=0; i<indicadores.length; i++){
//       arrIndicadores.push(indicadores[i]['countryName']+indicadores[i]['indicatorName']);
//    }
//    return arrIndicadores;
// }


// window.worldbank = {
//    paises: paises,
//    indicadorPaises: indicadorPaises,
//    // mostrarData: mostrarData, 
// };
// ghasta aquiiii





