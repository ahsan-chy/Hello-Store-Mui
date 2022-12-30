export const addToCart = (productId, productTitle, productDescription, productImage, productPrice, categoryId, categoryName, quantity ) => {
    return{
        type: "ADD_TO_CART",
        payload: {
            productId: productId, 
            productTitle: productTitle,
            productDescription: productDescription,
            productImage: productImage,
            productPrice: productPrice, 
            categoryId: categoryId, 
            categoryName: categoryName,
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