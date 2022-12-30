import { combineReducers } from "redux";
import { addToCart, cartQuantity } from "../reducers/productReducer";
import userReducer  from "./userReducer";

const rootReducer = combineReducers(
    {
        user: userReducer,
        cart: addToCart, 
        quantity: cartQuantity
}
)

export default rootReducer
