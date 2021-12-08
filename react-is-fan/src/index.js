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
            <h3>{title}</h3>
            <p>by: {author}</p>
            <p>pages: {pages}</p>
        </section>
    )

}

class Library extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        // add to the method context
        this.toggleOpenClosed = this.toggleOpenClosed.bind(this)
    }

    toggleOpenClosed(){
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }

    // toggleOpenClosed(){
    //     this.setState({
    //         open: !this.state.open
    //     })
    // }

    render() {
        console.log(this.state)
        const { books } = this.props
        // the same as above
        // const books = this.props.books
        return (
            <div>
                <h1>Welcome to the library!!!</h1>
                <h2>The library is {this.state.open ? 'open' : 'closed'}!</h2>
                <button onClick={this.toggleOpenClosed}>{this.state.open ? "Close the library" : "Open the library"}</button>
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
}


ReactDOM.render(
    <Library books={BookList} />,
    document.getElementById('react-container')
)