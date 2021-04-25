import React from 'react'
import BookList from './BookList'

const BookShelf = ({ booksOnShelf, shelf, shelfChanged }) => {
    const shelfNames = { currentlyReading: 'Currently Reading', wantToRead: 'Want to Read', read: 'Read' }

    return (
        <div key={shelf} className="bookshelf">
            <h2 className="bookshelf-title">{shelfNames[shelf]}</h2>
            <div className="bookshelf-books">
                <BookList books={booksOnShelf} shelfChanged={shelfChanged} />
            </div>
        </div>
    )
}

export default BookShelf