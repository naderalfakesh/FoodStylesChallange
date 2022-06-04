import React from 'react';
import { FlatList, FlatListProps } from 'react-native';
import { EmptyState, FoodCard, LoadingState } from '../../../components';
import { Card } from '../../../models/card';

import { styles } from './CardList.styles';

interface Props {
  style?: FlatListProps<Card>['contentContainerStyle'];
  list: Card[];
  loading: boolean;
  onOptionsPress: (item: Card) => void;
}
const CardListScreen = ({ style, list, loading, onOptionsPress }: Props) => {
  return loading ? (
    <LoadingState />
  ) : (
    <FlatList
      style={styles.list}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[styles.container, style]}
      data={list}
      renderItem={({ item }) => (
        <FoodCard
          title={item.name}
          style={styles.card}
          onOptionsPress={() => onOptionsPress(item)}
        />
      )}
      ListEmptyComponent={() => (
        <EmptyState message="There are no food cards yet!" />
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default CardListScreen;
