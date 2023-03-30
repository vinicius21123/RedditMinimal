import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postReducer from "../features/post/postSlice";
import subredditReducer from '../features/Subreddit/subredditSlice';
import postCommentsReducer from '../features/postComments/postCommentsSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    post: postReducer,
    subreddit:subredditReducer,
    comments:postCommentsReducer,
  },
});
