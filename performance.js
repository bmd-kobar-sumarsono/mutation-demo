const employee = require("./employee.js");

function calculateBonus(data) {
  return data.salary * 0.1;
}

const bonus = calculateBonus(employee);

module.exports = bonus;
