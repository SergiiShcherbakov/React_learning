import React, { Component } from 'react';
import ReactDOM from 'react-dom'

var style = {
    backgroundColor: 'orange',
    color: 'white',
    fontfamily: 'Arial'
}

let SkiData = {
    total: 50,
    powder: 20,
    backcountry: 10,
    goal: 100
}

class SkyDayCounter extends React.Component {
    render() {
        const {total, powder, backcountry, goal} = this.props
        console.log(this.props)
        return (
            <section>
                <div> Total Days: {total} </div>
                <div> Total Days: {powder} </div>
                <div> Total Days: {backcountry} </div>
                <div> Total Days: {goal} </div>
            </section>
        )
    }
}

ReactDOM.render(
    <SkyDayCounter
        total={SkiData.total}
        powder={SkiData.powder}
        backcountry={SkiData.backcountry}
        goal={SkiData.goal}
    />,
    document.getElementById('react-container')
)