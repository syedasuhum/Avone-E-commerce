import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Auth/UserSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
