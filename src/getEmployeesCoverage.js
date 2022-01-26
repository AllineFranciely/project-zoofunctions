const data = require('../data/zoo_data');

function getEmployee(person) {
  return data.employees.find((employee) => // find encontra o primeiro elemento que satisfaz a condição.
    (person.name === employee.firstName
  || person.name === employee.lastName
  || person.id === employee.id));
}

function getSpecies(employee) {
  return employee.responsibleFor.map((id) => // map junta no array todas as especies com o id correspondente.
    data.species.find((specie) =>
      (specie.id === id)));
}

function getAllEmployees() {
  return data.employees.map((employee) => {
    const species = getSpecies(employee);
    return {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: species.map((specie) => specie.name),
      locations: species.map((specie) => specie.location),
    };
  });
}
function getEmployeesCoverage(person) {
  if (!person) return getAllEmployees();
  const employee = getEmployee(person);
  if (employee === undefined) throw new Error('Informações inválidas'); // cria a mensagem de erro diante da condição passada.
  const species = getSpecies(employee);
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: species.map((specie) => specie.name), // map junta no array todas as espécies da condição.
    locations: species.map((specie) => specie.location), // map junta no array todas as localizações.
  };
}

module.exports = getEmployeesCoverage;
