function reducer(state,action){
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,count:state.count+state.step
            }
        case "DECREMENT":
            return {
                ...state,count:state.count-state.step
            }
        case "RESET":
            return {
                ...state,count:0,
                step:1
            }
        case "STEP":
            return {
                ...state,step:state.step+1
            }
    
        default:
            return state;
    }
};

export default reducer;