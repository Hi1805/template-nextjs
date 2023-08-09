import { combineReducers, configureStore } from '@reduxjs/toolkit';
import exampleReducer from './example/example.slice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
const rootReducer = combineReducers({
  example: exampleReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
