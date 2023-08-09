import { createSlice } from '@reduxjs/toolkit';
import { Example, ExampleState } from './example.types';
import { fetchExamples } from './example.thunk';

const initialState: ExampleState = {
  examples: [],
};
//** NAME Features */
const exampleSlice = createSlice({
  name: 'example',
  reducers: {},
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchExamples.fulfilled, (state, action) => {
      state.examples = action.payload || [];
    });
  },
});

export default exampleSlice.reducer;
