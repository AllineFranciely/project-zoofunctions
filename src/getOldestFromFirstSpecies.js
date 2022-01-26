const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const person = data.employees.find((employee) => employee.id === id); // find retorna o primeiro elemento que satisfaz a condição.
  const firstSpecie = data.species.find((specie) => specie.id === person.responsibleFor[0]);
  const checkAge = firstSpecie.residents.reduce((accumulator, currentValue) => ( // reduce acumula o valor do currentValue no accumulator.
    (currentValue.age > accumulator) ? currentValue.age : accumulator), 0); // 0 é o primeiro valor impresso no reduce. se o currentValue for maior que o valor no accumulador ele passa a valer o valor do accumulador.
  return Object.values(firstSpecie.residents.find((animal) => animal.age === checkAge)); // object.value retorna um array com os valores das propriedades do objeto.
}
// console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = getOldestFromFirstSpecies;
// pesquisas realizadas no material do course da trybe.
