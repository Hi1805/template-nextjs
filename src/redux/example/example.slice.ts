import { createSlice } from '@reduxjs/toolkit';
import { Example, ExampleState } from './example.types';
import { fetchExamples } from './example.thunk';

const initialState: Example[] = [];
//** NAME Features */
const exampleSlice = createSlice({
  name: 'example',
  reducers: {},
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchExamples.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default exampleSlice.reducer;
