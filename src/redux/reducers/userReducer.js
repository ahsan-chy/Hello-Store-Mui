const initialState = null

const userReducer = (state = initialState, action) => {
    
    switch(action.type){
        case "SIGNIN": 
            return {
                ...state,
                userData: action.payload,
              }
        case "SIGNUP": 
            return  action.payload

        case "SIGNOUT": 
            return  action.payload
        
        case "UPDATEPROFILE": 
                return {
                    ...state,
                    userData: action.payload,
                }   
        default:
            return state
    }
}

export default userReducer;