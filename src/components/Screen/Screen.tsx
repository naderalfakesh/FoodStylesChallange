import { View, ViewProps } from 'react-native';
import React, { FC } from 'react';
import { gradientColors, secondaryGradientColors, styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  style?: ViewProps['style'];
}

const Screen: FC<Props> = ({ style, children }) => {
  return (
    <View style={[styles.container, style]}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={gradientColors}
        style={styles.gradient}>
        <LinearGradient
          locations={[0, 0.26, 0.83, 1]}
          colors={secondaryGradientColors}
          style={[styles.secondaryGradient]}
        />
        {children}
      </LinearGradient>
    </View>
  );
};

export default Screen;
