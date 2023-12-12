import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
     name:'cart',
     initialState:{
        items:[]
     },
     reducers:{
        addItem:(state,action) =>{
             state.items.push(action.payload)
        },
        removeItem :(state,action)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            // state.items.length = 0;
            return { items: [] }; 
        }
     }
})

export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;


/*
    reducers:{
        addItem:(state,action) =>{
             state.items.push(action.payload)
        },

        reducers: => this is basically action

        (state,action) =>{
             state.items.push(action.payload)
        }        ==> this is basically reducer function


        removeItem : actions
        clearCart: actions
        
*/