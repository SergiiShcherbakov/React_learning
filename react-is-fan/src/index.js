import React, { Component } from 'react';
import ReactDOM from 'react-dom'

let BookList = [
    { "title": "One", "author": "One author", "pages": 33},
    { "title": "One1", "author1": "One author1", "pages": 331},
    { "title": "One2", "author2": "One author2", "pages": 332}
]

const Book = ({author, title, pages, freeBookmark}) => {
    return (
        <section>
            <h3>{title}</h3>
            <p>by: {author}</p>
            <p>pages: {pages}</p>
            <p>freeBookmark: {freeBookmark ? "yes!" : "no!"}</p>
        </section>
    )

}

const Hiring = () =>
    <div>
        <p>The library is hiring.</p>
    </div>

const NotHiring = () =>
    <div>
        <p>The library is not hiring.</p>
    </div>

class Library extends React.Component {
    state = {
        open: true,
        freeBookmark: true,
        hiring: true,
        data: [],
        loading: false
    }
    // The diagram shows component lifecycle
    // https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
    componentDidMount() {
        console.log("The component is  now mounted!")
        this.setState({loading:true})
        fetch('https://hplussport.com/api/products/order/price/sotr/asc/qty/1')
            .then(data => data.json())
            .then(data => this.setState({data, loading: false}))
    }
    componentDidUpdate() {
        console.log("The component is  now updated!")
    }
    componentWillUnmount() {
        console.log("The component wii unmount!")
    }
    toggleOpenClosed=() => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }
    //--------------
    render() {
        console.log(this.state)
        const { books } = this.props
        // the same as above
        // const books = this.props.books
        return (
            <div>
                <h1>Welcome to the library!!!</h1>
                {this.state.hiring ? <Hiring /> : <NotHiring />}
                {this.state.loading ? "loading..." :
                 <div>
                     {this.state.data.map(product => {
                         return(
                             // article about accessibility
                             //https://reactjs.org/docs/accessibility.html
                             <div key={product.id}>
                                 <h3>Libraty product of the Week!</h3>
                                 <h4>{product.name}</h4>
                                 <img alt={product.name} src={product.image} height={100} />
                             </div>
                         )
                     })}
                 </div>
                }
                <h2>The library is {this.state.open ? 'open' : 'closed'}!</h2>
                <button onClick={this.toggleOpenClosed}>{this.state.open ? "Close the library" : "Open the library"}</button>
                {books.map(
                    (book, i) =>
                        <Book key={i} // all component in list should have unique id key, or we will have warning
                              title={book.title}
                              author={book.author}
                              pages={book.pages}
                              freeBookmark={this.state.freeBookmark}
                        />
                )}
            </div>
        )
    }
}

//https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
ReactDOM.render(
    <Library books={BookList} />,
    document.getElementById('react-container')
)