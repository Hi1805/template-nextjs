import { createSlice } from '@reduxjs/toolkit';

const initialState = {};
const appSlice = createSlice({
  name: 'app/state',
  initialState,
  reducers: {},
});

const { actions, reducer: appReducer } = appSlice;
export default appReducer;
