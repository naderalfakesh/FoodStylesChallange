import { View, ViewProps } from 'react-native';
import React, { FC } from 'react';
import {
  gradientColors,
  GRADIENT_HEIGHT,
  GRADIENT_OFFSET,
  secondaryGradientColors,
  styles,
} from './Screen.styles';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  style?: ViewProps['style'];
}

const Screen: FC<Props> = ({ style, children }) => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={[styles.container, style]}>
      <LinearGradient
        style={[{ height: GRADIENT_HEIGHT + top, paddingTop: top }]}
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <LinearGradient
          style={[styles.secondaryGradient, { top: GRADIENT_OFFSET + top }]}
          colors={secondaryGradientColors}
          locations={[0, 0.26, 0.83, 1]}
        />
        {children}
      </LinearGradient>
    </View>
  );
};

export default Screen;
