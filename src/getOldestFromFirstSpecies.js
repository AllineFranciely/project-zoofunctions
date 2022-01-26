const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const person = data.employees.find((employee) => employee.id === id); // find retorna o primeiro elemento que satisfaz a condição.
  const firstSpecie = data.species.find((specie) => specie.id === person.responsibleFor[0]);
  const checkAge = firstSpecie.residents.reduce((oldest, current) => { // reduce acumula o valor do currentValue no accumulator e retorna o accumulator.
    if (current.age > oldest.age) {
      return current;
    }
    return oldest;
  });
  return [checkAge.name, checkAge.sex, checkAge.age];
}
// console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = getOldestFromFirstSpecies;
// pesquisas realizadas no material do course da trybe.
