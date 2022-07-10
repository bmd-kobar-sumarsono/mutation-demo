import { adjustment } from "./yearly.js";
import { bonus } from "./performance.js";

const adjustmentSalary = adjustment.salary;
const performanceBonus = bonus;

console.log({ adjustmentSalary });
console.log({ performanceBonus });

const newSalary = adjustmentSalary + performanceBonus;
console.log(newSalary);
