import React from 'react'
import {Component} from 'react'
import {connect} from 'react-redux'
import {updateTime} from '../actions/index'

class Clock extends Component{
    componentDidMount(){
        // setInterval(this.props.updateTime,1000);
        setInterval(()=>{
            this.props.updateTime();
        },1000);
    }
    render(){
        return(
            <div className ="text-center mt-5">
                <h1>{this.props.time}</h1>
            </div>
        )
    }
}

function mapStateProps(state){
    return{
        time: state.clock.time
    }
}
export default connect(mapStateProps,{updateTime: updateTime})(Clock);