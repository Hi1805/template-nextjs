import { Reducer, combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import exampleReducer from './slices/example.slice';
import { RESET_STATE_ACTIONS } from '@/constants/actions';

const appReducer = combineReducers({
  exampleReducer,
});

export type RootState = ReturnType<typeof appReducer>;
const rootReducer: Reducer = (state: RootState, action) => {
  if (action.type === RESET_STATE_ACTIONS) {
    state = {} as RootState;
  }
  return appReducer(state, action);
};

export const resetStore = () => ({
  type: RESET_STATE_ACTIONS,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
