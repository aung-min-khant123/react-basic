import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook, removeBook } from "../redux/bookslice";

function BooksList() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");

  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  console.log(books);

  const handleAdd = () => {
    if(name && author) {
        dispatch(addBook({name, author}));
        setName("");
        setAuthor("");
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder="Please add book name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br /><br />
      <input
        type="text"
        placeholder="Please add autor name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      /><br /><br />
      <button onClick={handleAdd}>Add Book</button>
      {
        books.map((book, index) => {
            return (
                <React.Fragment>
                    <h1>{book.name}</h1>
                    <p>{book.author}</p>
                    <button onClick = {() => dispatch(removeBook(index))}>Delete</button>
                </React.Fragment>
            )
        })
      }
    </>
  );
}

export default BooksList;
