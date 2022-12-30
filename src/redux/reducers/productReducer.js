const initialState = [];

export const addToCart = (state = initialState, action) => {
    switch (action.type){
        case "ADD_TO_CART":
            return [...state, action.payload]
        default: 
            return state;
    }   
}

export const cartQuantity = (state = 0, action) => {
    switch (action.type){
        case "INCREMENT_NUMBER":
            return state + 1;
        case "DECREMENT_NUMBER":
            return state - 1;
        default: 
            return state;
    }   
}