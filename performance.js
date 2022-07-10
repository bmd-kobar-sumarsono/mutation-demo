import { employee } from "./employee.js";

function calculateBonus(data) {
  return data.salary * 0.1;
}

export const bonus = calculateBonus(employee);
