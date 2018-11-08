import React from 'react'
import { Route } from 'react-router-dom';
import Welcome from './welcome';

export default () =>{
    return(
        <div className="container">
            <h1>some text</h1>
            <Welcome/>
            <Route path ="/" component ={Welcome}/>
        </div>
)
}

