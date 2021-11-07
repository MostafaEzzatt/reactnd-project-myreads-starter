import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./bookShelf";

export default class BookList extends Component {
  render() {
    const { books, updateBook, getAllBooks } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              title="Currently Reading"
              books={books.filter((book) => book.shelf === "currentlyReading")}
              updateBook={updateBook}
              getAllBooks={getAllBooks}
            />
            <BookShelf
              title="Want to Read"
              books={books.filter((book) => book.shelf === "wantToRead")}
              updateBook={updateBook}
              getAllBooks={getAllBooks}
            />
            <BookShelf
              title="Read"
              books={books.filter((book) => book.shelf === "read")}
              updateBook={updateBook}
              getAllBooks={getAllBooks}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}
