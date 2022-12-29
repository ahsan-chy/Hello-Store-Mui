export const addToCart = (productId, productPrice, categoryId, quantity ) => {
    return{
        type: "ADD_TO_CART",
        payload: {
            productId: productId, 
            productPrice: productPrice, 
            categoryId: categoryId, 
            quantity: quantity, 
        }
    }
}
export const incCart= (item) => {
    return{
        type: "INCREMENT_NUMBER",
        payload: item
    }
}

export const decCart= (item) => {
    return{
        type: "DECREMENT_NUMBER",
        payload: item
    }
}