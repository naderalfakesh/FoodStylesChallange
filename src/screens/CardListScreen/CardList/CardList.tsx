import React from 'react';
import { FlatList, FlatListProps } from 'react-native';
import FoodCard from '../../../components/FoodCard';

import { styles } from './CardList.styles';

type Card = {
  id: string;
  name: string;
};
interface Props {
  style?: FlatListProps<Card>['contentContainerStyle'];
  list: Card[];
  onOptionsPress: (item: Card) => void;
}
const CardListScreen = ({ style, list, onOptionsPress }: Props) => {
  return (
    <FlatList
      contentContainerStyle={[styles.container, style]}
      data={list}
      renderItem={({ item }) => (
        <FoodCard
          title={item.name}
          style={styles.card}
          onOptionsPress={() => onOptionsPress(item)}
        />
      )}
    />
  );
};

export default CardListScreen;
