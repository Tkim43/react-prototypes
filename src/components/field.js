import React from 'react'


export default props =>{
    console.log(props);
    return(
        <div>
            <label>{props.label}</label>
            <input {...props}className="form-control"/>
        </div>
    )
}