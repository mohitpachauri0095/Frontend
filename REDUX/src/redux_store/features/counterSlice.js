import { creteSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",    
    initialState: {
        value:0
    },
    reducer:{
        inicrement: (state) =>{
            state.value += 1
        },
        decrement: (state) =>{
            state.value -= 1
        }
    }

});

export const { inicrement, decrement } = counterSlice.actions
export default counterSlice.reducer