import { combineReducers } from "redux";
import cartQuantity from "./productReducer";
import userReducer  from "./userReducer";

const rootReducer = combineReducers(
    {user: userReducer,
    cart: cartQuantity}
)

export default rootReducer
