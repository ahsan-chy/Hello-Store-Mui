export const addToCart = (productId, productTitle, productDescription, productImage, productPrice, categoryId, categoryName, quantity, subTotal ) => {
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
            subTotal: subTotal
        }
    }
}
export const updateQuantity= (id, quantity) => {
    return{
        type: "UPDATE_QUANTITY",
        payload: {
            id: id, 
            quantity: quantity
        }
    }
}

export const removeFromCart= (id) => {
    return{
        type: "REMOVE_TO_CART",
        payload: {
            id: id
        }
    }
}

export const totalAmount= (total) => {
    return{
        type: "TOTAL",
        payload: total
    }
}