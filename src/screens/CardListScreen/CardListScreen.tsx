import React, { useState } from 'react';
import { Alert, Image } from 'react-native';
import { Screen, ErrorState } from '../../components';
import useCardList from '../../hooks/useCards';
import useShare from '../../hooks/useShare';
import { Card } from '../../models/card';
import CardList from './CardList';
import { styles } from './CardListScreen.styles';
import CardOptionsModal from './CardOptionsModal/CardOptionsModal';
import Footer from './Footer';

const logo = require('../../../assets/icons/logo.png');

type Action = 'share' | 'duplicate' | 'delete';

const CardListScreen = () => {
  const {
    list,
    loading,
    error,
    addCard,
    actionLoading,
    duplicateCard,
    deleteCard,
  } = useCardList();

  const { shareCard } = useShare();

  const [selectedItem, setSelectedItem] = useState<Card | null>(null);

  const handleActions = async (action: Action) => {
    if (!selectedItem) {
      return;
    }
    try {
      switch (action) {
        case 'duplicate': {
          await duplicateCard(selectedItem.id);
          setSelectedItem(null);
          break;
        }
        case 'delete': {
          Alert.alert(
            'Confirm delete',
            'This will delete the Food Style and all its settings.',
            [
              {
                text: 'Delete',
                style: 'destructive',
                onPress: async () => {
                  await deleteCard(selectedItem.id);
                  setSelectedItem(null);
                },
              },
              { text: 'Cancel' },
            ],
          );
          break;
        }
        case 'share': {
          await shareCard(selectedItem);
          break;
        }
      }
    } catch (err) {}
  };

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
      <Footer onAddCardPress={() => addCard()} loading={actionLoading} />
      {selectedItem ? (
        <CardOptionsModal
          cardName={selectedItem.name}
          visible={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          onShare={() => handleActions('share')}
          onDuplicate={() => handleActions('duplicate')}
          onDelete={() => handleActions('delete')}
          loading={actionLoading}
        />
      ) : null}
    </Screen>
  );
};

export default CardListScreen;
