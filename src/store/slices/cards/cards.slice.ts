import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Card } from '../../../models/card';
import { getCardsThunk } from './cards.thunks';
import { InitialState } from './cards.types';

const initialState: InitialState = { loading: false };

const cardsSlice = createSlice({
  name: 'cards',
  initialState: initialState,
  reducers: {
    addCard: (state, action: PayloadAction<Card>) => {
      if (state.list) {
        state.list.push(action.payload);
      } else {
        state.list = [action.payload];
      }
    },
    deleteCard: (state, action: PayloadAction<{ id: string }>) => {
      if (state.list) {
        const cardIndex = state.list.findIndex(
          item => item.id === action.payload.id,
        );
        state.list.splice(cardIndex, 1);
      }
    },
  },
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

const { reducer, actions } = cardsSlice;

export const { addCard, deleteCard } = actions;

export { reducer as cardsReducer };
