/**
 * Module 07: Arrays & Objects — Task 01
 *
 * Instructions:
 * 1. Implement each function using array/object methods.
 * 2. Run: npm run example src/07-arrays-and-objects/tasks/task-01.ts
 */

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Pen", price: 1.5 },
  { id: 2, name: "Notebook", price: 3.0 },
  { id: 3, name: "Eraser", price: 0.5 },
  { id: 4, name: "Ruler", price: 2.0 },
];

// Return total price of all products
function getTotalPrice(items: Product[]): number {
  return items.reduce((total, product) => total + product.price, 0);
}

// Return product names
function getProductNames(items: Product[]): string[] {
  return items.map(product => product.name);
}

// Return products with price less than maxPrice
function getAffordable(items: Product[], maxPrice: number): Product[] {
  return items.filter(product => product.price < maxPrice);
}

// Find product by id
function findProductById(items: Product[], id: number): Product | undefined {
  return items.find(product => product.id === id);
}

// Update product price without changing original
function updatePrice(product: Product, newPrice: number): Product {
  return { ...product, price: newPrice };
}

// --- Tests (do not modify) ---
console.log("getTotalPrice:", getTotalPrice(products)); // expected: 7
console.log("getProductNames:", getProductNames(products)); // expected: ["Pen", "Notebook", "Eraser", "Ruler"]
console.log("getAffordable(<2):", getAffordable(products, 2)); // expected: Pen and Eraser
console.log("findProductById(2):", findProductById(products, 2)?.name); // expected: "Notebook"
console.log("updatePrice:", updatePrice(products[0], 2.0)); // expected: { id: 1, name: "Pen", price: 2.0 }
