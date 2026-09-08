/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

type Book = {
    isbn: string;
    title: string;
    author: string;
    pages: number;
    category: string;
    available: boolean;
};

let book1: Book = {
    isbn: "978-001",
    title: "Death Smell",
    author: "M.S.R Marsya",
    pages: 465,
    category: "Fantasy",
    available: true
};

let book2: Book = {
    isbn: "978-002",
    title: "Insecurity",
    author: "Aleysha Roman",
    pages: 90,
    category: "Mental-Health",
    available: true
};

let book3: Book = {
    isbn: "978-003",
    title: "A star beyond lit",
    author: "Reyza Karina",
    pages: 670,
    category: "Horror",
    available: false
};

console.log(book1);
console.log(book2);
console.log(book3);