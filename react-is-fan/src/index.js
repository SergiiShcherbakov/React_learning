import React from 'react';
import ReactDOM from 'react-dom'

var style = {
    backgroundColor: 'orange',
    color: 'white',
    fontfamily: 'Arial'
}

class Message extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Hello Everyone! {this.props.msg}</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <Message age={50} msg="How are you?"/>,
    document.getElementById('react-container')
)