const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if(!animal) {
    let obj = {};
    data.species.forEach((specie) => {
      obj[specie.name] = specie.residents.length;
  });
  return obj;
}
if (!animal.sex) {
  const bixos = data.species.find((bixo) =>  bixo.name === animal.specie);
    return bixos.residents.length;
} 
let bixosSex = 0;
bixos.residents.forEach((resident) => {
  if (resident.sex === animal.sex) {
    bixosSex += 1;
  }
});
return bixosSex;
}

module.exports = countAnimals;
