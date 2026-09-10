/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */

let roomPrice = 650000;
let nights = 4;
let serviceCharge = 120000;
let isVIP = true;

let roomSubtotal = roomPrice * nights;

let discount = isVIP ? roomSubtotal * 0.12 : 0;

let afterDiscount = roomSubtotal - discount;

let tax = afterDiscount * 0.11;

let finalPayment = afterDiscount + tax + serviceCharge;

let freeBreakfast = nights >= 3 || isVIP;

console.log("Room Subtotal:", roomSubtotal);
console.log("Discount:", discount);
console.log("Tax:", tax);
console.log("Final Payment:", finalPayment);
console.log("Free Breakfast:", freeBreakfast);