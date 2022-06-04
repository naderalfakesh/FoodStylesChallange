import { View, Text, ViewProps } from 'react-native';
import React from 'react';
import styles from './ErrorState.styles';

interface Props {
  style?: ViewProps['style'];
  message?: string;
}
const ErrorState = ({ style, message = 'Unknown error!' }: Props) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

export default ErrorState;
