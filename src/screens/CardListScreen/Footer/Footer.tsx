import { View, ViewProps } from 'react-native';
import React from 'react';
import styles, { FOOTER_HEIGHT, UNDERLAY_HEIGHT } from './Footer.styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Button from '../../../components/Button';

interface Props {
  style?: ViewProps['style'];
  loading: boolean;
  onAddCardPress: () => void;
}
const Footer = ({ style, onAddCardPress, loading }: Props) => {
  const { bottom } = useSafeAreaInsets();
  return (
    <View style={[styles.container, style, { height: FOOTER_HEIGHT + bottom }]}>
      <View style={[styles.underlay, { height: UNDERLAY_HEIGHT + bottom }]} />
      <Button
        text="New Food Style"
        image={require('../../../../assets/icons/add.png')}
        onPress={onAddCardPress}
        loading={loading}
      />
    </View>
  );
};

export default Footer;
