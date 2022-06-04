import { View, Text, ViewProps, Image, Pressable } from 'react-native';
import React from 'react';
import { styles } from './FoodCard.styles';

interface Props {
  style?: ViewProps['style'];
  title: string;
  onOptionsPress: () => void;
  type?: 'options' | 'close';
}
const FoodCard = ({
  style,
  title,
  onOptionsPress,
  type = 'options',
}: Props) => {
  const icon =
    type === 'options'
      ? require('../../../assets/icons/options.png')
      : require('../../../assets/icons/close.png');
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      <Pressable
        style={({ pressed }) => [
          styles.optionsContainer,
          pressed && styles.pressed,
        ]}
        onPress={onOptionsPress}>
        <Image style={styles.options} source={icon} />
      </Pressable>
    </View>
  );
};

export default FoodCard;
