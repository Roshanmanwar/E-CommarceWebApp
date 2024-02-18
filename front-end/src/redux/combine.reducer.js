import { combineReducers } from "@reduxjs/toolkit";
import ProductSlice from "./product.slice";

// second step of Redux-toolkit.

// create a combine Reducer.... using combineReducers({})
const combineReducer = combineReducers({
    
    // store ProductSlice in this object
    products1 : ProductSlice,
    // all data of ProductSlice can store in products1 object...
    // to check it in a redux dev tool
});


// to export this combineReducer...
export default combineReducer;
