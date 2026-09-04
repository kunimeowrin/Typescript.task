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

type productInfo = {
    productCode: String,
    productName: String,
    sellingPrice: number,
    stockQuantity: number,
    productWeight: number,
    rating: number,
    discounted: boolean,
}

const product1: productInfo = {
    productCode: "5216345",
    productName: "Skincare",
    sellingPrice: 75000,
    stockQuantity: 23,
    productWeight: 123,
    rating: 5,
    discounted: true,
}

const product2: productInfo = {
    productCode: "329035485",
    productName: "Makeup",
    sellingPrice: 150200,
    stockQuantity: 96,
    productWeight: 123,
    rating: 5,
    discounted: false,
}

const product3: productInfo = {
    productCode: "985476325",
    productName: "Hairbrush",
    sellingPrice: 15000,
    stockQuantity: 85,
    productWeight: 24,
    rating: 5,
    discounted: false,
}

console.log({
    product1,
    product2,
    product3,
})