import { Text as TextBase, TextProps } from 'react-native';
import React from 'react';
import styles from './Text.styles';

export type TextPreset = 'bold-18-22' | 'bolder-15';
export type TextColor = 'primary' | 'secondary';

interface Props extends TextProps {
  preset: TextPreset;
  color: TextColor;
}

const getFontPresetStyle = (preset: TextPreset) => {
  switch (preset) {
    case 'bold-18-22':
      return styles['bold-18-22'];
    case 'bolder-15':
      return styles['bolder-15'];
  }
};

const getFontColor = (color: TextColor) => {
  switch (color) {
    case 'primary':
      return styles.primary;
    case 'secondary':
      return styles.secondary;
  }
};

const Text = ({ preset, color, style, children, ...rest }: Props) => {
  return (
    <TextBase
      style={[
        styles.base,
        getFontPresetStyle(preset),
        getFontColor(color),
        style,
      ]}
      {...rest}>
      {children}
    </TextBase>
  );
};

export default Text;
