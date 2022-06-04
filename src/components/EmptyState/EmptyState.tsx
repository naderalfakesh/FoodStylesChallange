import { View, ViewProps } from 'react-native';
import React from 'react';
import styles from './EmptyState.styles';
import Text from '../Text';

interface Props {
  style?: ViewProps['style'];
  message?: string;
}
const EmptyState = ({
  style,
  message = 'There is no data available!',
}: Props) => {
  return (
    <View style={[styles.container, style]}>
      <Text color="primary" preset="bold-18-22" style={styles.message}>
        {message}
      </Text>
    </View>
  );
};

export default EmptyState;
