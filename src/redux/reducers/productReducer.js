const initialState = [];

export const addToCart = (state = initialState, action) => {
    switch (action.type){
        case "ADD_TO_CART":
            const { productId } = action.payload;
            const dupe = state.find(obj => obj.productId === productId);
            return dupe ? state : [...state, action.payload ];

        case "UPDATE_QUANTITY":
            {
               const {id, quantity} = action.payload;
                 const productIndex = state.findIndex(product => product.productId === id)
                 if (productIndex !== -1) {
                    const updatedCartProducts = [...state]
                    updatedCartProducts[productIndex]={...updatedCartProducts[productIndex], quantity:quantity  }
                    return updatedCartProducts
                  } else {
                    // If the product was not found, return the original state
                    return state
                  }
                // action.payload.quantity
            }

        case "REMOVE_TO_CART":
            {
                const {id} = action.payload;
                const productIndex = state.findIndex(product => product.productId === id);
                // console.log(productIndex)
                return state.filter((_, i) => i !== productIndex);
            }
            
        default: 
            return state;
    }   
}

export const totalAmount = (state = 0, action) => {
    switch (action.type){
        case "TOTAL":
                {
                    const total  = action.payload;
                    console.log(total);
                    return  total 
                 }
        default:
            return state
}
}

