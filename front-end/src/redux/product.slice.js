import { createSlice } from "@reduxjs/toolkit";

// step-1     Create a Slice...
let ProductSlice = createSlice({

    // there is a three main parts in slice...

    // part-1
    name: "ProductSlice11",    //.....name of our slice...

    //part-2
    initialState: {           //.... use to define initial state (value)...
        //set initial state 
        productList: [],
        categories: [],
        cart: [],
        products:[],
        userdata :[],
        SearchData : []

    },

    //part-3
    reducers: {         //...it is a object ...where to create a method or function
        //... where we can write our logic 

        saveProduct: (state, action) => { // state --> current state of our list
            // under payload -- we get a actual data
            // console.log(action.payload);
            // to save this data in redux

            state.productList = action.payload;
            // updata product list state == and assign it and data
            // which is give us in action . payload
            // store data of action. payload to product list...
        },


        //category function...
        saveCategory: (state, action) => {
            state.categories = action.payload;
        },

        saveCart: (state, action) => {

            // check cart is there or not trough a cart index and    
            let index = state.cart.findIndex((cartIndex) => cartIndex.id === action.payload.id);

            //if care cart is there then only update quentity of product
            if (index !== -1) {
                state.cart[index].qty += 1;

            } else {
                //cart not there then add a cart
                state.cart.push(action.payload);



            }


            // if(action.payload.cart.id !== state.payload.cartt.id){
            //     state.cart.push(action.payload);
            // }else{
            //     state.cart.push();

            // }

        },
        //remove product
        removeProduct: (state, action) => {
            // let data = state.cart.id;
            // state.cart.splice(data,1);
            state.cart.splice(action.payload, 1)
            // splice-- used to delete da1ta from array..
            // it has two aru 1st is data which you want to delte and 2nd is how many data delte
        },
        addQty: (state, action) => {
            let index = state.cart.findIndex((cartIndex) => cartIndex.id === action.payload.id);
            state.cart[index].qty += 1;
        },

        removeQty: (state, action) => {
            let index = state.cart.findIndex((cartIndex) => cartIndex.id === action.payload.id);
            let cartQty = state.cart[index].qty;

        
            // console.log(cartQty);
            if (cartQty <= 1) {
                alert('do you want to delete product...!')
                state.cart.splice(action.payload, 1)
            } else {
                state.cart[index].qty -= 1;
            }
        },

        
        ProductInfo: (state, action) => {

            state.products.push(action.payload);

        },

        clearProducts: (state, action) => {
            state.products.splice(action.payload);
        },

        AddToCart: (state, action) => {
            let index = state.cart.findIndex((cartIndex) => cartIndex.id === action.payload.id);

            //if care cart is there then only update quentity of product
            if (index !== -1) {
                state.cart[index].qty += 1;

            } else {
                //cart not there then add a cart
                state.cart.push(action.payload);

            }

        },

        userdata:(state,action)=>{
            state.userdata=action.payload;
        },

        searchdata :(state,action)=>{
            state.SearchData = action.payload;

        }

    },




});


// To export reducer only from ProductSlice...
export default ProductSlice.reducer;


// export actions 
// under Our reducers there is a all are actions.
export const { saveProduct, saveCategory, saveCart, removeProduct, addQty, removeQty, ProductInfo, clearProducts, AddToCart ,userdata ,searchdata} = ProductSlice.actions;