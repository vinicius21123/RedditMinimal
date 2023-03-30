import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'search',
    initialState:{searches:{}},
    reducers:{
        setSearchTerm:(state,action)=>{
            state.searches = action.payload;
        }
    }
})

export const { setSearchTerm} = searchSlice.actions
export const getSearchTerm = (state) => state.searches;
export default searchSlice.reducer