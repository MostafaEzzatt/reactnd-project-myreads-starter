import React, { Component } from "react";
import Book from "./book";

export default class BookShelf extends Component {
  render() {
    const { title, books, updateBook, getAllBooks } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          {books.length ? (
            <ol className="books-grid">
              {books.map((book) => (
                <li key={book.id}>
                  <Book
                    book={book}
                    updateBook={updateBook}
                    getAllBooks={getAllBooks}
                  />
                </li>
              ))}
            </ol>
          ) : (
            <p>Please Add Books!</p>
          )}
        </div>
      </div>
    );
  }
}
