const employee = require("./employee.js");

function adjustSalary(data) {
  const employeeData = data;
  employeeData.salary += employeeData.salary * 0.5;
  return employeeData;
}

const adjustment = adjustSalary(employee);

module.exports = adjustment;
