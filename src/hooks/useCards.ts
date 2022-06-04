import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { getCardsThunk } from '../store/slices/cards';

const useCardList = () => {
  const dispatch = useAppDispatch();
  const { loading, error, list } = useAppSelector(state => state.cards);

  const getCards = useCallback(() => {
    dispatch(getCardsThunk());
  }, [dispatch]);

  useEffect(() => {
    // fetch cards at the start
    getCards();
  }, [getCards]);

  return { getCards, loading, error, list };
};

export default useCardList;
