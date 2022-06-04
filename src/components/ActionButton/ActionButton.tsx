import {
  TouchableOpacity,
  ViewProps,
  ImageSourcePropType,
  Image,
} from 'react-native';
import React from 'react';
import styles from './ActionButton.styles';
import Text from '../Text';

interface Props {
  style?: ViewProps['style'];
  text: string;
  image: ImageSourcePropType;
  onPress: () => void;
}
const ActionButton = ({ style, text, image, onPress }: Props) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text color="secondary" preset="bolder-15" style={styles.text}>
        {text}
      </Text>
      <Image style={styles.image} source={image} />
    </TouchableOpacity>
  );
};

export default ActionButton;
