import React from 'react';
import ReactDOM from 'react-dom'

var style = {
    backgroundColor: 'orange',
    color: 'white',
    fontfamily: 'Arial'
}

class Message extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello Everyone!</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <Message />,
    document.getElementById('react-container')
)