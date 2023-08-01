import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addPost(state, action) {},
    removePost(state, action) {
      state.splice(action.payload, 1);
    },
  },
});

const { actions, reducer: appReducer } = appSlice;
export const { addPost, removePost } = actions;
export default appReducer;
