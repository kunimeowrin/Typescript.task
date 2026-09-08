/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type Product = {
    productCode: string;
    productName: string;
    price: number;
    stock: number;
    weight: number;
    rating: number;
    discounted: boolean;
};

let product1: Product = {
    productCode: "P001",
    productName: "Mechanical Keyboard",
    price: 850000,
    stock: 18,
    weight: 1.2,
    rating: 4.5,
    discounted: true
};

let product2: Product = {
    productCode: "P002",
    productName: "Wireless Mouse",
    price: 250000,
    stock: 30,
    weight: 0.5,
    rating: 4.3,
    discounted: false
};

let product3: Product = {
    productCode: "P003",
    productName: "USB Headset",
    price: 350000,
    stock: 15,
    weight: 0.7,
    rating: 4.7,
    discounted: true
};

console.log(product1)
console.log(product2)
console.log(product3)