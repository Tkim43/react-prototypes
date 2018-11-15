import React from 'react'
import {Component} from 'react'
import {connect} from 'react-redux'

class Clock extends Component{
    render(){
        return(
            <div className ="text-center mt-5">
                <h1>Clock out time</h1>
            </div>
        )
    }
}

function mapStateProps(state){
    return{
        time: state.clock.time
    }
}
export default connect(mapStateProps(Clock);