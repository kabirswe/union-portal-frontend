import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
