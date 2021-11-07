import React from "react";
import { Routes, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchBooks from "./searchBooks";
import BookList from "./bookList";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  };

  componentDidMount = () => {
    this.getAllBooks();
  };

  updateBook = (bookID, shelf) => {
    BooksApp.update(bookID, shelf);
  };

  render() {
    return (
      <Routes>
        <Route
          exact
          path="/"
          element={
            <BookList
              books={this.state.books}
              getAllBooks={this.getAllBooks}
              updateBook={this.updateBook}
            />
          }
        />
        <Route
          exact
          path="/search"
          element={
            <SearchBooks
              books={this.state.books}
              getAllBooks={this.getAllBooks}
              updateBook={this.updateBook}
            />
          }
        />
      </Routes>
    );
  }
}

export default BooksApp;
