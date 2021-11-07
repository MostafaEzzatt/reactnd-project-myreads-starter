import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";

export default class Book extends Component {
  state = { shelf: this.props.book.shelf || "none" };

  handleBookShelfChagne = (e) => {
    BooksAPI.update(this.props.book, e.target.value).then(() => {
      this.props.getAllBooks();
    });
  };

  render() {
    const { imageLinks, title, authors } = this.props.book;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${
                imageLinks
                  ? imageLinks.smallThumbnail
                  : "./book-image-placeholder.png"
              }")`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              onChange={this.handleBookShelfChagne}
              value={this.state.shelf}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">
          {authors &&
            Object.keys(authors).map((authorID, idx) => (
              <div key={idx}> {authors[authorID]} </div>
            ))}
        </div>
      </div>
    );
  }
}
