import React, {Component} from 'react'
import Movie from './movie'
import axios from 'axios'

class TopTen extends Component{
    constructor(props){
        super(props);
        this.state ={
            movies:[]
        };
    }
    componentWillMount(){
        const API_URL = "http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json";
        axios.get(API_URL).then((response)=>{
            this.setState({
                movies: response.data.feed.entry
            })
        });
    }
    render(){
        const movieList = this.state.movies.map((item,index)=>{
            return(
                <Movie info={item} key={index}/>
            )
        });
        return(
        <div>
            {movieList}
        </div>
     )
    }
}

export default TopTen;