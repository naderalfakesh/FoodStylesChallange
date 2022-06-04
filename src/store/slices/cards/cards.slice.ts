import { createSlice } from '@reduxjs/toolkit';
import { getCardsThunk } from './cards.thunks';
import { InitialState } from './cards.types';

const initialState: InitialState = { loading: false };

const cardsSlice = createSlice({
  name: 'cards',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCardsThunk.pending, state => {
        state.loading = true;
      })
      .addCase(getCardsThunk.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(getCardsThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

const { reducer } = cardsSlice;

export { reducer as cardsReducer };
