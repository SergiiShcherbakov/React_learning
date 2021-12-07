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
                <h1 style={{color: this.props.color}}>
                    Hello Everyone! {this.props.msg}
                </h1>
                <p>I'll check back in {this.props.minutes} minutest</p>
            </div>
        )
    }
}

ReactDOM.render(
    <Message color="blue" age={50} msg="How are you?" minutes={5} />,
    document.getElementById('react-container')
)