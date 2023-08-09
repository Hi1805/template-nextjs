import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionType } from './example.types';
import exampleApi from './example.service';

const fetchExamples = createAsyncThunk(ActionType.GET_DETAIL, async () => {
  try {
    return await exampleApi.getExamples();
  } catch (error) {
    return [];
  }
});

export { fetchExamples };
