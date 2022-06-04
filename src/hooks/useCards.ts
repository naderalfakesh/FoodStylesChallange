import { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useAppDispatch, useAppSelector } from '../store';
import { addCardThunk, getCardsThunk } from '../store/slices/cards';

const useCardList = () => {
  const [adding, SetAdding] = useState(false);
  const dispatch = useAppDispatch();
  const { loading, error, list } = useAppSelector(state => state.cards);

  const getCards = useCallback(() => {
    dispatch(getCardsThunk());
  }, [dispatch]);

  const addCard = useCallback(async () => {
    try {
      SetAdding(true);
      // We need to use unwrap to get the original promise rejection error
      await dispatch(addCardThunk()).unwrap();
    } catch (err) {
      // In real application we will probably have a snackbar service to show such errors
      Alert.alert('Add card error', (err as Error).message || 'Unknown error');
    } finally {
      SetAdding(false);
    }
  }, [dispatch]);

  useEffect(() => {
    // fetch cards at the start
    getCards();
  }, [getCards]);

  return { getCards, loading, error, list, addCard, adding };
};

export default useCardList;
