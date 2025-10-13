interface Author {
    name : string;
    avator : string;
}

const authorOne: Author = {
    name: "John",
    avator : "/img1.jpg",
};

interface Book {
    title: string;
    id: number;
    tags: string[];
    created_at: Date;
    author: Author;
}

const newBook: Book = {
    title: "Book1",
    id: 1,
    tags: ["tag1", "tag2"],
    created_at: new Date(),
    author: authorOne,
};

function createBook(book: Book): void {
    console.log(`Create a book ${book.title}`);
}
createBook(newBook);

let books: Book[] = [];

books.push({
    title: "Book1",
    id: 1,
    tags: ["tag1", "tag2"],
    created_at: new Date(),
    author: authorOne,
});

