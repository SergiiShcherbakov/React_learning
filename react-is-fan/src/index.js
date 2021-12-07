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
    getPercent = decimal => {
        return decimal * 100 + '%'
    }
    calcCoalProgress = (total, goal) => {
        return this.getPercent(total/goal)
    }

    render() {
        console.log(this.props)
        const {total, powder, backcountry, goal} = this.props
        return (
            <section>
                <div> Total Days: {total} </div>
                <div> Powder Days: {powder} </div>
                <div> Backcountry Days: {backcountry} </div>
                <div> Goal progress: {this.calcCoalProgress(total, goal)} </div>
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