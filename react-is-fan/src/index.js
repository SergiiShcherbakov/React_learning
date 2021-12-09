import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Library from "./Library";

let BookList = [
    {"title": "One"},
    { "title": "One", "author": "One author", "pages": 33},
    { "title": "One1", "author1": "One author1", "pages": 331},
    { "title": "One2", "author2": "One author2", "pages": 332}
]

ReactDOM.render(
    <div>
        <Library books={BookList} />
        <Library />
    </div>,
    document.getElementById('react-container')
)