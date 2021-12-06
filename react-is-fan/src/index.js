import React from 'react';
import ReactDOM from 'react-dom'

var style = {
    backgroundColor: 'orange',
    color: 'white',
    fontfamily: 'Arial'
}


ReactDOM.render(
    <div style={style}>
        <h1 id="headding-element">Hello world!!!</h1>
        <p>We're glad you're here!</p>
    </div>,
    document.getElementById('react-container')
)