import React from 'react'
import Stopwatch from './stopwatch'

// creating a functional component called App that returns the html
export default () => {
    return(
        <div className = "container">
            <h1 className = "text-center">Stopwatch</h1>
            <Stopwatch/>
        </div>
    )
}

