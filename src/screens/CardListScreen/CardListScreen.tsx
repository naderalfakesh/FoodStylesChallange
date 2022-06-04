import React from 'react';
import { Image } from 'react-native';

import { Screen } from '../../components';
import { styles } from './CardListScreen.styles';

const CardListScreen = () => {
  return (
    <Screen>
      <Image
        style={styles.logo}
        source={require('../../../assets/icons/logo.png')}
      />
    </Screen>
  );
};

export default CardListScreen;
