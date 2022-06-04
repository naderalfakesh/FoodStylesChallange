import { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useAppDispatch, useAppSelector } from '../store';
import {
  addCardThunk,
  deleteCardThunk,
  duplicateCardThunk,
  getCardsThunk,
} from '../store/slices/cards';

const useCardList = () => {
  const [actionLoading, setActionLoading] = useState(false);
  const dispatch = useAppDispatch();
  const { loading, error, list } = useAppSelector(state => state.cards);

  const getCards = useCallback(() => {
    dispatch(getCardsThunk());
  }, [dispatch]);

  useEffect(() => {
    // fetch cards at the start
    getCards();
  }, [getCards]);

  const addCard = useCallback(async () => {
    try {
      setActionLoading(true);
      // We need to use unwrap to get the original promise rejection error
      await dispatch(addCardThunk()).unwrap();
    } catch (err) {
      // In real application we will probably have a snackbar service to show such errors
      Alert.alert('Add card error', (err as Error).message || 'Unknown error');
    } finally {
      setActionLoading(false);
    }
  }, [dispatch]);

  const duplicateCard = async (id: string) => {
    try {
      setActionLoading(true);
      await dispatch(duplicateCardThunk(id)).unwrap();
    } catch (err) {
      Alert.alert(
        'Duplicate card error',
        (err as Error).message || 'Unknown error',
      );
      // we need to pass the error down so we prevent the modal from closing in case error
      throw err;
    } finally {
      setActionLoading(false);
    }
  };

  const deleteCard = useCallback(
    async (id: string) => {
      try {
        setActionLoading(true);
        await dispatch(deleteCardThunk(id)).unwrap();
      } catch (err) {
        Alert.alert(
          'Delete card error',
          (err as Error).message || 'Unknown error',
        );
        // we need to pass the error down so we prevent the modal from closing in case error
        throw err;
      } finally {
        setActionLoading(false);
      }
    },
    [dispatch],
  );

  return {
    getCards,
    loading,
    error,
    list,
    addCard,
    duplicateCard,
    deleteCard,
    actionLoading,
  };
};

export default useCardList;
