import React from 'react';
import { Image } from 'react-native';

import { Screen } from '../../components';
import CardList from './CardList';
import { styles } from './CardListScreen.styles';
const data = [
  { id: '1', name: 'Nader' },
  { id: '2', name: 'Nader' },
  {
    id: '3',
    name: 'reiciendis, deserunt atque omnis officia, temporibus in delectus?',
  },
  { id: '4', name: 'Nader' },
];

const CardListScreen = () => {
  return (
    <Screen>
      <Image
        style={styles.logo}
        source={require('../../../assets/icons/logo.png')}
      />
      <CardList list={data} onOptionsPress={item => console.log(item.id)} />
    </Screen>
  );
};

export default CardListScreen;
