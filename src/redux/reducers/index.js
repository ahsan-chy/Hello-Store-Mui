import { combineReducers } from "redux";
import { addToCart, totalAmount } from "../reducers/productReducer";
import userReducer  from "./userReducer";


const rootReducer = combineReducers(
    {
        user: userReducer,
        cart: addToCart, 
        totalAmountR: totalAmount
}
)

export default rootReducer
