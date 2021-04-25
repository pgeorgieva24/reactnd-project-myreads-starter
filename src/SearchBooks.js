import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookList from './BookList'


class SearchBooks extends Component {
    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({ query });

        //TODO: make it work with  throttle/debounce
        this.props.searchBook(query);
    }

    render() {
        const { bookResults, shelfChanged } = this.props;
        const { query } = this.state;
        const showingBooks = bookResults;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        className='close-search'
                        to='/'>
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            className='search-books'
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    {showingBooks && showingBooks.length !== 0 && (
                        <BookList books={showingBooks} shelfChanged={shelfChanged} />
                    )}
                </div>
            </div>
        )
    }
}

export default SearchBooks