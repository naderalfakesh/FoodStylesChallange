import React from 'react';
import { Image } from 'react-native';

import { Screen } from '../../components';
import ErrorState from '../../components/ErrorState';
import useCardList from '../../hooks/useCards';
import CardList from './CardList';
import { styles } from './CardListScreen.styles';
import Footer from './Footer';

const CardListScreen = () => {
  const { list, loading, error } = useCardList();
  return (
    <Screen>
      <Image
        style={styles.logo}
        source={require('../../../assets/icons/logo.png')}
      />
      {!list && error ? (
        <ErrorState message={error.message} />
      ) : (
        <CardList
          list={list || []}
          loading={loading}
          onOptionsPress={item => console.log(item.id)}
        />
      )}
      <Footer onAddCardPress={() => console.log('create')} />
    </Screen>
  );
};

export default CardListScreen;
