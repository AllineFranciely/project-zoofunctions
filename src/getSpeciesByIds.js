const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) { // spread para que o parâmetro possa receber objetos. Dica da Ellen na monitoria.
  if (!ids) { // ! = diferente de ids
    return [];
  }
  return data.species.filter((specie) => ids.includes(specie.id));
}

module.exports = getSpeciesByIds;
// include determina se o array contém um determinado elemento, no caso id. Logo a função vai retornar todos os elementos em que ID estiver incluso na espécie.
