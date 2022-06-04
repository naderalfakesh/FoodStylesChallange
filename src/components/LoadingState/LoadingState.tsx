import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import React from 'react';
import styles from './LoadingState.styles';
import theme from '../../theme';

interface Props {
  style?: ActivityIndicatorProps['style'];
  size?: ActivityIndicatorProps['size'];
}
const ErrorState = ({ style, size = 'large' }: Props) => {
  return (
    <ActivityIndicator
      style={[styles.container, style]}
      size={size}
      color={theme.colors.ORANGISH}
    />
  );
};

export default ErrorState;
