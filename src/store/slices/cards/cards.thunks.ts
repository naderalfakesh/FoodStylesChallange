import { createAsyncThunk } from '@reduxjs/toolkit';
import { cards } from '../../../services/graphql';
import { addCard } from './cards.slice';

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

export const addCardThunk = createAsyncThunk(
  'cards/addCard',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const result = await cards.create();
      if (result.data) {
        dispatch(addCard(result.data.createCard));
      } else {
        throw new Error('Add card failed.');
      }
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
