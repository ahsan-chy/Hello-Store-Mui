const initialState = [];

const cartQuantity = (state = initialState, action) => {
    switch (action.type){
        // case "INCREMENT_NUMBER":
        //     return state + 1;
        // case "DECREMENT_NUMBER":
        //     return state - 1;
        case "ADD_TO_CART":
            return [...state, action.payload]
        default: 
            return state;
    }   
}
export default cartQuantity;