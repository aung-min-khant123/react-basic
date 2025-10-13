"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authorOne = {
    name: "John",
    avator: "/img1.jpg",
};
const newBook = {
    title: "Book1",
    id: 1,
    tags: ["tag1", "tag2"],
    created_at: new Date(),
    author: authorOne,
};
function createBook(book) {
    console.log(`Create a book ${book.title}`);
}
createBook(newBook);
let books = [];
books.push({
    title: "Book1",
    id: 1,
    tags: ["tag1", "tag2"],
    created_at: new Date(),
    author: authorOne,
});
//# sourceMappingURL=interface.js.map