import { configureStore } from "@reduxjs/toolkit";
import combineReducer from "./combine.reducer";

//Third Step of Redux-toolkit...

// to create a store... using configureStore method...
 const store = configureStore({
    // to store our combine Reducers to an reducer object...
    //it must wite reducer only it is a default 
    reducer : combineReducer,

});

export default store;
// to attach this store in index.js 
//... in <provider>method arround app.js