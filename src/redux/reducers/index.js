import { combineReducers } from "redux";
import { addToCart } from "../reducers/productReducer";
import userReducer  from "./userReducer";


const rootReducer = combineReducers(
    {
        user: userReducer,
        cart: addToCart, 
}
)

export default rootReducer
