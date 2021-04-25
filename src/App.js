import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from './Home'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    booksResults: []
  }

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ books })
      })
  }

  searchBook = (query) => {
    BooksAPI.search(query)
      .then((booksResult) => {
        if (!booksResult || !booksResult.length) {
          booksResult = [];
        }

        this.setShelfToBookResults(booksResult);
      })
  }

  setShelfToBookResults = (books) => {
    const booksResult = books ? books : this.state.booksResults;
    booksResult.map(bookR => {
      const bookOnShelf = this.state.books.find(book => book.id === bookR.id);
      if (bookOnShelf) {
        bookR.shelf = bookOnShelf.shelf;
      }
      else bookR.shelf = '';
      return bookR;
    })

    this.setState(() => ({
      booksResults: booksResult
    }))
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        this.setState((prevState) => ({
          books: prevState.books.filter(oldBook => {
            if (!shelf) {
              return false;
            }
            if (shelf && oldBook.id === book.id) {
              oldBook.shelf = shelf;
            }
            return oldBook;
          })
        }), () => {
          this.setShelfToBookResults();
        })
      });
  }

  shelfChanged = (shelf, bookId) => {
    BooksAPI.get(bookId)
      .then((book) => {
        if (!book) {
          return;
        }
        this.updateBook(book, shelf);
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Home
            books={this.state.books}
            shelfChanged={(shelf, bookId) => this.shelfChanged(shelf, bookId)} />
        )} />
        <Route path='/search' render={() => (
          <SearchBooks
            searchBook={(query) => this.searchBook(query)}
            bookResults={this.state.booksResults}
            shelfChanged={(shelf, bookId) => this.shelfChanged(shelf, bookId)} />
        )} />
      </div>
    )
  }
}

export default BooksApp
