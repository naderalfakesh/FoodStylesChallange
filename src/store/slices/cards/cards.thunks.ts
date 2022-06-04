import { createAsyncThunk } from '@reduxjs/toolkit';
import { cards } from '../../../services/graphql';
import { addCard, deleteCard } from './cards.slice';

export const getCardsThunk = createAsyncThunk(
  'cards/getCards',
  async (_, { rejectWithValue }) => {
    try {
      const result = await cards.get();
      return result.data.cards;
    } catch (err) {
      rejectWithValue(err);
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
    } catch (err) {
      rejectWithValue(err);
    }
  },
);

export const duplicateCardThunk = createAsyncThunk(
  'cards/duplicateCard',
  async (id: string, { rejectWithValue, dispatch }) => {
    try {
      const result = await cards.duplicate(id);

      if (result.data) {
        dispatch(addCard(result.data.duplicateCard));
      } else {
        throw new Error('Duplicate card failed.');
      }
    } catch (err) {
      rejectWithValue(err);
    }
  },
);

export const deleteCardThunk = createAsyncThunk(
  'cards/deleteCard',
  async (id: string, { rejectWithValue, dispatch }) => {
    try {
      const result = await cards.delete(id);
      if (result.data) {
        dispatch(deleteCard({ id }));
      } else {
        throw new Error('Delete card failed.');
      }
    } catch (err) {
      rejectWithValue(err);
    }
  },
);
