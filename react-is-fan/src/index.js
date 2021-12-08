import React, { Component } from 'react';
import ReactDOM from 'react-dom'

let BookList = [
    { "title": "One", "author": "One author", "pages": 33},
    { "title": "One1", "author1": "One author1", "pages": 331},
    { "title": "One2", "author2": "One author2", "pages": 332}
]

const Book = ({author, title, pages}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>pages: {pages}</p>
        </section>
    )

}

const Libraty = ({books}) => {
    return (
        <div>
            Welcome to the library!!!
            {books.map(
                (book, i) =>
                    <Book key={i} // all component in list should have unique id key, or we will have warning
                          title={book.title}
                          author={book.author}
                          pages={book.pages} />
            )}
        </div>
    )
}


ReactDOM.render(
    <Libraty books={BookList} />,
    document.getElementById('react-container')
)