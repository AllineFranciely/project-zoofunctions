const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const employeeZoo = data.employees.find((employee) => (
    employee.firstName === employeeName || employee.lastName === employeeName
  ));
  return employeeZoo;
}

module.exports = getEmployeeByName;
// find procura o primeiro elemento que satisfaça a condição(name === name)
// return dentro da função find retornou true ou false.
