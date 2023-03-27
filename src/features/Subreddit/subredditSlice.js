import { createSlice } from "@reduxjs/toolkit";

const subredditSlice = createSlice({
    name:'subreddit',
    initialState:{subreddit:{}},
    reducers:{
        addSubreddit:(state,action)=>{
            state.subreddit = action.payload;
        }
    }
})

export const { addSubreddit} = subredditSlice.actions
export const selectSub = (state) => state.subreddit;
export default subredditSlice.reducer