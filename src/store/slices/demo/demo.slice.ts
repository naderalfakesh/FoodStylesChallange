import { createSlice } from '@reduxjs/toolkit';
import { fetchAll } from './demo.thunks';
import { InitialState } from './demo.types';

const initialState: InitialState = { loading: false };

const demoSlice = createSlice({
  name: 'demo',
  initialState: initialState,
  reducers: {
    demo: () => {},
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAll.pending, state => {
        state.loading = true;
      })
      .addCase(fetchAll.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchAll.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

const { actions, reducer } = demoSlice;

export const { demo } = actions;
export { reducer as demoReducer };
