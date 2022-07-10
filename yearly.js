import { employee } from "./employee.js";

function calculateAdjustment(salary) {
  return salary * 0.5;
}

function adjustSalary(data) {
  const newData = { ...data };
  data.salary += calculateAdjustment(data.salary);
  return newData;
}

export const adjustment = adjustSalary(employee);
