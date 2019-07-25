// const information = Object.keys(WORLDBANK.PER.indicators[0].data);
// const porcentaje = Object.values(WORLDBANK.PER.indicators[0].data);
//const data = (information[i],porcentaje[i]);


const data = ["2004", 27.6299991607666, "2005", 27.2099990844727];
const obj = {};

for(let i = 0; i < data.length; i++){
   if(i%2 === 0){
     console.log(data[i]);
    obj[data[i]] = data[i+1]
   } 
}

console.log(obj)

// const anio = document.getElementById('peruAnio');
// const percent = document.getElementById('peruPercent');


const arrayAnos = Object.keys(obj)

// for(let i = 0; i < arrayAnos.length; i++){
//   anio.innerHTML += arrayAnos[i]
//   percent.innerHTML += obj[arrayAnos[i]]
 //console.log(arrayAnos[i])
 //console.log(obj[arrayAnos[i]]);

// }