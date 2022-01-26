const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id)); // some retorna true se ao menos 1 elemento satisfaz a condição.
} // includes determina se o array contém determinado elemento e retorna true ou false.

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    return data.employees.filter((employee) => employee.managers // retorna outro array com todos os elementos que satisfazem a condição.
      .some((id) => id === managerId))
      .map((name) => `${name.firstName} ${name.lastName}`); // devolve um novo array com os ele e invoca a função callback passada para cada elemento do array original.
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!'); // error cria um obejeto de erro, no caso para uma exceção definida na função.
}

module.exports = { isManager, getRelatedEmployees };
