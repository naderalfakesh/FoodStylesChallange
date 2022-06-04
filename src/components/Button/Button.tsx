import {
  ViewProps,
  Pressable,
  Image,
  ImageSourcePropType,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import styles from './Button.styles';
import theme from '../../theme';
import Text from '../Text';

interface Props {
  style?: ViewProps['style'];
  text: string;
  image?: ImageSourcePropType;
  onPress: () => void;
  loading?: boolean;
}
const Button = ({ style, text, image, onPress, loading = false }: Props) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        style,
        pressed && styles.pressed,
        loading && styles.disabled,
      ]}
      onPress={onPress}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator
          style={styles.loading}
          size="small"
          color={theme.colors.ORANGISH}
        />
      ) : image ? (
        <Image source={image} style={styles.image} />
      ) : null}
      <Text color="primary" preset="bold-18-22">
        {text}
      </Text>
    </Pressable>
  );
};

export default Button;
