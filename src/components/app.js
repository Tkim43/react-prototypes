// imports the core React code
import React from 'react';
import Table from './table';
// create a functional component called App that returns an <h1>
export default () => {
    // table has data inside that is the student array
    return <div className ='container'><h1>Student Grade Table</h1><Table data ={students}/></div>
}

const students = [{student: 'Tiffany', course: 'react', grade: 100},{student: 'Pumpkin', course: 'japanese', grade: 50},
    {student: 'Bill', course: 't-shirt making', grade: 90}];





