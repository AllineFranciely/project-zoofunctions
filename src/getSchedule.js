const data = require('../data/zoo_data');

const timeDay = (day) => {
  const hoursDay = data.hours[day]; // o [day] acessa as chaves do hours de acordo com o parâmetro que for passado. Como day pode ser qualquer dia, pra acessar a chave sendo variável, tem que usar entre colchetes.
  const time = `Open from ${hoursDay.open}am until ${hoursDay.close}pm`;
  return time;
};
const animalsOfDay = (day) => {
  const allAnimalsOfDay = data.species.filter((specie) => specie.availability.includes(day)); // filter retorna um array com todos os elementos que satisfazem à condição.
  const nameOfAllAnimals = allAnimalsOfDay.map((animal) => animal.name); // map junta no array todas as especies com o name correspondente.
  return nameOfAllAnimals; // include determina se o array contém um determinado elemento.
};
const scheduleOfDay = (day) => {
  const schedule = {
    officeHour: timeDay(day),
    exhibition: animalsOfDay(day),
  };
  if (day === 'Monday') {
    schedule.officeHour = 'CLOSED';
    schedule.exhibition = 'The zoo will be closed!';
  }
  return schedule;
};
const dayForAnimal = (name) => data.species.find((animal) => animal.name === name).availability; // find retorna o primeiro elemento que satisfaz a condição.
const weekSchedule = (week) => {
  const allDays = {};
  week.forEach((day) => { allDays[day] = scheduleOfDay(day); }); // forEach faz o loop mas não retorna nada.
  return allDays;
};

function getSchedule(scheduleTarget) {
  const weekDays = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  const allAnimals = data.species.map((animal) => animal.name); // map junta no array todas as especies com o name correspondente.
  let schedule = {};
  if (weekDays.includes(scheduleTarget)) { // includes determina se o array contém um determinado elemento.
    console.log('seja bem vindo');
    schedule[scheduleTarget] = scheduleOfDay(scheduleTarget);
  } else if (allAnimals.includes(scheduleTarget)) { // includes determina se o array contém um determinado elemento.
    schedule = dayForAnimal(scheduleTarget);
  } else {
    schedule = weekSchedule(weekDays);
  }
  return schedule;
}

module.exports = getSchedule;

// A dica do parâmetro entre colchetes foi do colega Gabriel Pondaco (T19-B), que inclusive me explicou como funciona a sintaxe.
