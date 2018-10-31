import React from 'react';
// create a functional component that returns a table
export default (props)=>{
    // holds the student rows loop through the data using map
    const tableRows = props.data.map((item, index)=>{
        console.log(item);
        return(
            <tr>
                <td>{item.student}</td>
                <td>{item.course}</td>
                <td>{item.grade}</td>
            </tr>
        )
    });
    // why is it when i add key={index} the grade table doesn't show up
    return (<table className = 'table'>
        <thead className = 'thead-inverse'>
        <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Grade</th>
        </tr>
        </thead>
        <tbody>
            {tableRows}
        </tbody>
    </table>)

}

