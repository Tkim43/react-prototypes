import React from 'react';
import ReactDOM from 'react-dom';

const userObj = {name: 'tiffany', luckyNumber: luckyNumber()};
// make sure you have two parameters
ReactDOM.render(
    greeting(userObj),
    document.getElementById('root')
);

function luckyNumber(){
    // 0 - 1000
    // return Math.floor(Math.random() * (1000+1));
    // 1 - 1000
    return Math.floor(Math.random() * 1000) +1;
}


function greeting(obj){
    return (
    <div className='container'>
        <h1>Welcome {obj.name}</h1>
        <h2 className ='text-muted'>Your lucky number is: {obj.luckyNumber}</h2>
    </div>)
}