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
    ISBNnumber: number,
    Title: String,
    authorName: String,
    pages: number,
    bookCategory: String,
    availableToBorrow: boolean,
}

const book1: Book = {
    ISBNnumber: 9780306406157,
    Title: "See me then.",
    authorName: "Serena Rein",
    pages: 189,
    bookCategory: "Horror",
    availableToBorrow: false,
}

const book2: Book = {
    ISBNnumber: 0987654321,
    Title: "Little Perfect Skull",
    authorName: "Megami Shariko",
    pages: 257,
    bookCategory: "Romance",
    availableToBorrow: true,
}

const book3: Book = {
    ISBNnumber: 1234567890,
    Title: "The Storm After The Rain",
    authorName: "Osana Najimi",
    pages: 207,
    bookCategory: "Thriller",
    availableToBorrow: false,
}

console.log(book1, book2, book3)