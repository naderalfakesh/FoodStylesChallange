import { View, Text, ViewProps } from 'react-native';
import React from 'react';
import styles from './EmptyState.styles';

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
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

export default EmptyState;
