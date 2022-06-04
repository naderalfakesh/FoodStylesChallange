import {
  TouchableOpacity,
  Text,
  ViewProps,
  ImageSourcePropType,
  Image,
} from 'react-native';
import React from 'react';
import styles from './ActionButton.styles';

interface Props {
  style?: ViewProps['style'];
  text: string;
  image: ImageSourcePropType;
  onPress: () => void;
}
const ActionButton = ({ style, text, image, onPress }: Props) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
      <Image style={styles.image} source={image} />
    </TouchableOpacity>
  );
};

export default ActionButton;
