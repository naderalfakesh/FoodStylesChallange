import { createAsyncThunk } from '@reduxjs/toolkit';
import { demo } from './demo.slice';
import { FetchAllParams } from './demo.types';

export const fetchAll = createAsyncThunk(
  'demo/fetchAll',
  async (params: FetchAllParams, { getState, dispatch, rejectWithValue }) => {
    try {
      console.log(params);
      const state = getState();
      console.log(state);
      const response = await new Promise<any>(resolve => {
        resolve(null);
      });
      dispatch(demo);
      return response;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
