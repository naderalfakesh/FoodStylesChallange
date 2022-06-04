import { createAsyncThunk } from '@reduxjs/toolkit';
import { cards } from '../../../services/graphql';

export const getCardsThunk = createAsyncThunk(
  'cards/getCards',
  async (_, { rejectWithValue }) => {
    try {
      const result = await cards.get();
      return result.data.cards;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
