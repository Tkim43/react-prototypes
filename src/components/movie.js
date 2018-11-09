import React from 'react'

export default props =>{

    const{info} = props;
    return(
        <div>
            <img src={info['im:image'][2].label}/>
            <h3>Movie</h3>
            <p>{info.summary.label}</p>
        </div>
    )
}