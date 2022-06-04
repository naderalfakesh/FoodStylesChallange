import { View, Text, ViewProps, Image, Pressable } from 'react-native';
import React from 'react';
import { styles } from './FoodCard.styles';

interface Props {
  style?: ViewProps['style'];
  title: string;
  onOptionsPress: () => void;
}
const FoodCard = ({ style, title, onOptionsPress }: Props) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      <Pressable
        style={({ pressed }) => [
          styles.optionsContainer,
          pressed && styles.pressed,
        ]}
        onPress={onOptionsPress}>
        <Image
          style={styles.options}
          source={require('../../../assets/icons/options.png')}
        />
      </Pressable>
    </View>
  );
};

export default FoodCard;
