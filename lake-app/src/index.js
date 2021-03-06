import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const lakeList = [
    {id: 1, name: "Blue", trailhead: "Blue trailhdead"},
    {id: 2, name: "White", trailhead: "White trailhdead"},
    {id: 3, name: "Sinivir", trailhead: "Sinivir trailhdead"},
    {id: 4, name: "Sinivir2", trailhead: "Sinivir2 trailhdead"}
]

ReactDOM.render(
    <App lakes={lakeList} />,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
