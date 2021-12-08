import React, { Component } from 'react';
import ReactDOM from 'react-dom'

const Book = ({author, title, pages}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>pages: {pages}</p>
        </section>
    )

}

const Libraty = () => {
    return (
        <div>
            Welcome to the library!!!
            <Book title="One" author="One author" pages={33} />
            <Book title="Two" author="Second author" pages={43} />
            <Book title="Three" author="Third author" pages={53} />
        </div>
    )
}

ReactDOM.render(
    <Libraty />,
    document.getElementById('react-container')
)