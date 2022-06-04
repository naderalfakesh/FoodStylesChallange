import React, { useState } from 'react';
import { Image } from 'react-native';

import { Screen } from '../../components';
import ErrorState from '../../components/ErrorState';
import useCardList from '../../hooks/useCards';
import { Card } from '../../models/card';
import CardList from './CardList';
import { styles } from './CardListScreen.styles';
import CardOptionsModal from './CardOptionsModal/CardOptionsModal';
import Footer from './Footer';

const logo = require('../../../assets/icons/logo.png');

const CardListScreen = () => {
  const { list, loading, error, addCard, adding } = useCardList();
  const [selectedItem, setSelectedItem] = useState<Card | null>(null);
  return (
    <Screen>
      <Image style={styles.logo} source={logo} />
      {!list && error ? (
        <ErrorState message={error.message} />
      ) : (
        <CardList
          list={list || []}
          loading={loading}
          onOptionsPress={item => setSelectedItem(item)}
        />
      )}
      <Footer onAddCardPress={() => addCard()} loading={adding} />
      {selectedItem ? (
        <CardOptionsModal
          item={selectedItem}
          visible={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          onShare={() => console.log(1)}
          onDuplicate={() => console.log(2)}
          onDelete={() => console.log(3)}
        />
      ) : null}
    </Screen>
  );
};

export default CardListScreen;
