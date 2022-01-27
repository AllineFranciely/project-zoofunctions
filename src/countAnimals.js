const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const obj = {};
    data.species.forEach((specie) => { // forEach faz o loop mas não retorna valor.
      obj[specie.name] = specie.residents.length;
    });
    return obj;
  }
  const bixos = data.species.find((bixo) => bixo.name === animal.specie); // find encontra o primeiro elemento que satisfaz a condição.
  if (!animal.sex) {
    return bixos.residents.length;
  }
  let bixosSex = 0;
  bixos.residents.forEach((resident) => { // forEach faz o loop mas não retorna nada.
    if (resident.sex === animal.sex) {
      bixosSex += 1;
    }
  });
  return bixosSex;
}
module.exports = countAnimals;
// console.log(countAnimals());
