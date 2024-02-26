import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    updateNameFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { updateNameFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
