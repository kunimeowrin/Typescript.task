/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

let gpa = 3.89;
let income = 4200000;
let competitions = 4;
let hasDisciplinaryRecord = false;
let documentsComplete = true;

let accepted =
  gpa >= 3.75 &&
  income < 5000000 &&
  competitions >= 3 &&
  !hasDisciplinaryRecord &&
  documentsComplete;

let scholarship = accepted ? 12000000 : 0;

let budget = 500000000;
let remainingBudget = budget - scholarship;

console.log("Accepted:", accepted);
console.log("Scholarship:", scholarship);
console.log("Remaining Budget:", remainingBudget);