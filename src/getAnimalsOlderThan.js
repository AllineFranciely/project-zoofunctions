const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const arrayAnimais = data.species.find((species) => species.name === animal);
  const idadeAnimais = arrayAnimais.residents.every((ages) => ages.age > age);
  return idadeAnimais;
}

module.exports = getAnimalsOlderThan;
