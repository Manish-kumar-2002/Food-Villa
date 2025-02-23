import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items : JSON.parse(localStorage.getItem("cartNew")) || []
    },
    reducers:{
        addItem:(state,action) =>{
            state.items.push(action.payload)
            localStorage.setItem("cartNew",JSON.stringify(state.items))
        },
        removeItem:(state,action) => {
            state.items = state.items.filter(item => item?.info?.id !== action.payload)
            localStorage.setItem("cartNew",JSON.stringify(state.items))
        },
        cartClear:(state)=>{
            state.items = []
            localStorage.setItem("cartNew",JSON.stringify(state.items))
        }
    }
})

export const {addItem,removeItem,cartClear} = cartSlice.actions;
export default cartSlice.reducer