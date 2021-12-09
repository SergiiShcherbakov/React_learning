import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class FavoriteColorForm extends React.Component {

    state = { value: 't' }
    newColor = e => {
        this.setState({value: e.target.value})
        console.log(e.target.value)
    }
    submit = e => {
        e.preventDefault()
        console.log('new color: ' + this.state.value)
    }
    render() {
        return(
            <form onSubmit={this.submit}>
                <label>Favorite color:
                    <input type="color" onChange={this.newColor}/>
                </label>
                <button>Submit</button>
            </form>
        )
    }

}


ReactDOM.render(
    <FavoriteColorForm />,
    document.getElementById('react-container')
)