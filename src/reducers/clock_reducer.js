const DEFAULT_STATE = {time: new Date().toLocaleDateString()};


export default (state = DEFAULT_STATE, action) =>{
    switch(action.type){
        default:
            return state;
    }
}