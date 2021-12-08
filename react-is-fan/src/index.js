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

const getPercent = decimal => {
    return decimal * 100 + '%'
}

const calcCoalProgress = (total, goal) => {
        return getPercent(total/goal)
    }

const SkyDayCounter = ({total, powder, backcountry, goal}) => {
    return (
        <section>
            <div> Total Days: {total} </div>
            <div> Powder Days: {powder} </div>
            <div> Backcountry Days: {backcountry} </div>
            <div> Goal progress: {calcCoalProgress(total, goal)} </div>
        </section>
    )
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