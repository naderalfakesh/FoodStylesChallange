import { Card } from '../../../models/card';

export type InitialState = {
  loading: boolean;
  list?: Card[];
  error?: any;
};
