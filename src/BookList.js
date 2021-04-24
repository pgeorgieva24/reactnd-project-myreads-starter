import React, { Component } from 'react'
import Book from './Book'

class BookList extends Component {
    render() {
        let { books, shelfChanged } = this.props;
        books = books.length > 0 ? books : [books];

        return (
            <div className="list-books">
                <ol className="books-grid">
                    {books.map(book => (
                        <li key={book.id}>
                            <Book book={book} shelfChanged={shelfChanged} shelf={book.shelf} />
                        </li>
                    ))}
                </ol>
            </div >
        )
    }
}

export default BookList