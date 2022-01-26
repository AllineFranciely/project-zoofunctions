const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const entrantsTotal = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((entrant) => { // forEach faz o loop mas não retorna nada.
    if (entrant.age < 18) {
      entrantsTotal.child += 1;
    }
    if (entrant.age >= 18 && entrant.age < 50) {
      entrantsTotal.adult += 1;
    }
    if (entrant.age >= 50) {
      entrantsTotal.senior += 1;
    }
  });
  return entrantsTotal;
}

function calculateEntry(entrants) {
  if (typeof entrants === 'undefined' || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { prices } = data; // sem as chaves é necessário usar o data.prices. Dúvida esclarecida na mentoria do Lucas.
  console.log(prices);
  const entrantsObj = countEntrants(entrants);
  const childEntry = entrantsObj.child * prices.child;
  const adultEntry = entrantsObj.adult * prices.adult;
  const seniorEntry = entrantsObj.senior * prices.senior;
  return childEntry + adultEntry + seniorEntry;
}

module.exports = { calculateEntry, countEntrants };
