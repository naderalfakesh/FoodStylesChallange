import { View, ViewProps } from 'react-native';
import React from 'react';
import styles from './ErrorState.styles';
import Text from '../Text';

interface Props {
  style?: ViewProps['style'];
  message?: string;
}
const ErrorState = ({ style, message = 'Unknown error!' }: Props) => {
  return (
    <View style={[styles.container, style]}>
      <Text color="primary" preset="bold-18-22" style={styles.message}>
        {message}
      </Text>
    </View>
  );
};

export default ErrorState;
