const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const arrayAnimais = data.species.find((species) => species.name === animal); // find encontra o primeiro elemento que satisfaz a condição.
  const idadeAnimais = arrayAnimais.residents.every((ages) => ages.age > age);// every retorna true se todos os valores do elemento satisfazem a condição.
  return idadeAnimais;
}

module.exports = getAnimalsOlderThan;

// para escolha do comando .every foi utilizado material do course (https://app.betrybe.com/course/fundamentals/higher-order-functions-do-javascript-es6/javascript-es6-higher-order-functions-foreach-find-some-every-sort/250fa96c-fc2c-408b-b8a1-3b3c97274f20/conteudos/34b89701-bc2e-40a3-9eff-c9305f580abb/arraysome-e-arrayevery/f3070468-9723-4cec-9878-b2ce2b246eaa?use_case=side_bar).
