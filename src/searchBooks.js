import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book from "./book";

export default class SearchBooks extends Component {
  state = {
    text: "",
    books: [],
    toggle: false,
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
    if (e.target.value) {
      BooksAPI.search(e.target.value).then((books) => {
        if (!books.error) {
          const newBooks = books.map((book) => this.updateWhenOnShelf(book));
          this.setState({ books: newBooks });
        } else {
          this.setState({ books: [] });
        }
      });
    } else if (!e.target.value) {
      this.setState({ books: [] });
    }
  };

  updateWhenOnShelf = (searchBook) => {
    searchBook.shelf = "none";
    if (this.props.books) {
      const currentBook = this.props.books.filter(
        (book) => book.id === searchBook.id
      );
      if (currentBook.length) {
        searchBook.shelf = currentBook[0].shelf;
      }
    }
    return searchBook;
  };

  render() {
    const { getAllBooks } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.text}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map((book) => (
              <li key={book.id}>
                <Book book={book} getAllBooks={getAllBooks} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
