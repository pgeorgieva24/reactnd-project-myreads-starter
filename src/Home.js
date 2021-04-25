import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

const Home = ({ books, shelfChanged }) => {
    const shelfs = [];

    books.forEach(book => {
        if (shelfs.indexOf(book.shelf) < 0) {
            shelfs.push(book.shelf);
        }
    })

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                {shelfs.map(shelf => (
                    <BookShelf key={shelf} booksOnShelf={books.filter(book => book.shelf === shelf)} shelf={shelf} shelfChanged={shelfChanged} />
                ))}
            </div>
            <Link
                to='/search'
                className='open-search'
            >Add a book</Link>
        </div>
    )
}

export default Home