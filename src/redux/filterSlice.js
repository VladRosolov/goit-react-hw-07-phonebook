import { createSlice } from '@reduxjs/toolkit';

const initialState = '';
export const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(_, action) {
      return action.payload;
    },
  },
});
export const { setFilter } = FilterSlice.actions;
export const getFilter = state => state.filter;
