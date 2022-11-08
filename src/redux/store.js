import { configureStore } from '@reduxjs/toolkit';
import { ContactsSlice } from './contactSlice';
import { FilterSlice } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: ContactsSlice.reducer,
    filter: FilterSlice.reducer,
  },
});
