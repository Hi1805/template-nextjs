import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addPost(state, action) {},
    removePost(state, action) {
      state.splice(action.payload, 1);
    },
  },
});
const { actions, reducer: exampleReducer } = todoSlice;
export const { addPost, removePost } = actions;
export default exampleReducer;
