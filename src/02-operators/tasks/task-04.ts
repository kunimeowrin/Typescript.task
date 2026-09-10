/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

let subtotal = 850000 + (275000 * 2) + 120000;

let totalItems = 0;
totalItems++; // Keyboard
totalItems++; // Mouse
totalItems++; // Mouse
totalItems++; // Mouse Pad

let discount = 0;

if (subtotal > 1000000) {
  discount = subtotal * 0.10;
}

let finalPayment = subtotal - discount;

console.log("Subtotal:", subtotal);
console.log("Total Items:", totalItems);
console.log("Discount:", discount);
console.log("Free Shipping:", true);
console.log("Final Payment:", finalPayment);