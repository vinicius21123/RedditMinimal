import { createSlice } from "@reduxjs/toolkit";

const postCommentsSlice = createSlice({
    name:'postComments',
    initialState:{post:{}},
    reducers:{
        addComment:(state,action)=>{
            state.post = action.payload;
        }
    }
})

export const { addComment} = postCommentsSlice.actions
export const selectPostComment = (state) => state.post;
export default postCommentsSlice.reducer