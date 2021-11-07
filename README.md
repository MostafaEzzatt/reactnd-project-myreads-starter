# MyReads Project

This is a bookshelf app that allows you to select and categorize books to one of three categories.

- Currently Reading
- Want to Read
- Read

## To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## Futures

as we said the app has three categories and each book has a control that allows you to select the shelf for that book.
when you change the bookshelf the book moves to it and the home/main page has a link to the search page.

when you go to the search page you will find input on top of the screen you can search by title or author. as the value of the input change the books that match that input text is displayed on the page, along with a control that lets you add the book to the shelf you selected.

the search page also has a link to the home/main page. when you navigate to it you will see the books you have added from the search page

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the only terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

Search results are capped at 20.
