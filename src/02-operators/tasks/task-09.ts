/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */

let subtotal = 850000 + (275000 * 2) + 420000;

let membershipDiscount = subtotal * 0.10;

let paymentBeforeTax = subtotal - membershipDiscount - 100000;

let vat = paymentBeforeTax * 0.11;

let finalPayment = paymentBeforeTax + vat;

let rewardPoints = Math.floor(paymentBeforeTax / 50000);

let freeShipping = true || paymentBeforeTax > 1500000;

console.log("Product Subtotal:", subtotal);
console.log("Membership Discount:", membershipDiscount);
console.log("Voucher:", 100000);
console.log("Payment Before Tax:", paymentBeforeTax);
console.log("VAT:", vat);
console.log("Final Payment:", finalPayment);
console.log("Reward Points:", rewardPoints);
console.log("Free Shipping:", freeShipping);