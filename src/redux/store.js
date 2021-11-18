import { configureStore } from '@reduxjs/toolkit';
import contacts from './slices/contact';
import filter from './slices/filter';

const rootReducer = {
  contacts,
  filter,
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'prodaction',
});
