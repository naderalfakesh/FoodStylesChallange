import { StyleSheet } from 'react-native';
import theme from '../../../theme';
StyleSheet.absoluteFill;

export const FOOTER_HEIGHT = 56;
export const UNDERLAY_HEIGHT = 40;

const styles = StyleSheet.create({
  container: {},
  underlay: {
    ...StyleSheet.absoluteFillObject,
    top: undefined,
    backgroundColor: theme.colors.WHITE,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 15,
    shadowOpacity: 1,
    elevation: 10, // estimation for android
  },
});

export default styles;
