import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name:'post',
    initialState:{post:{}},
    reducers:{
        addPost:(state,action)=>{
            state.post = action.payload;
        }
    }
})

export const { addPost} = postSlice.actions
export const selectPost = (state) => state.post;
export default postSlice.reducer