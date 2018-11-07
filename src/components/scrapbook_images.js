import React from 'react'

export default props =>{
    console.log(props);
    const{src, style} = props.about;
    return(
        <img className = "imgDesign" src = {src} style={style}/>
    )
}