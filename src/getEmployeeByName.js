const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const employeeZoo = data.employees.find((employee) => ( // find encontra o primeiro elemento que satisfaz a condição.
    employee.firstName === employeeName || employee.lastName === employeeName
  ));
  return employeeZoo;
}

module.exports = getEmployeeByName;
// find procura o primeiro elemento que satisfaça a condição(name === name)
