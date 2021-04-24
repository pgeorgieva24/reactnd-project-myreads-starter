import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'

class Book extends Component {
    render() {
        const { book, shelf, shelfChanged } = this.props;

        return (
            <div key={book.id} className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail && (book.imageLinks.thumbnail)})` }}></div>
                    <ShelfChanger currentShelf={shelf} shelfChanged={shelfChanged} book={book} />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
            </div >
        );
    }
}

export default Book