import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  base: {
    fontFamily: 'ProximaNovaA-Regular',
    fontStyle: 'normal',
    letterSpacing: 0,
  },
  'bold-18-22': {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 22,
  },
  'bolder-15': {
    fontWeight: '600',
    fontSize: 15,
  },
  primary: { color: theme.colors.GREYISH_BROWN },
  secondary: { color: theme.colors.GREEN_TEAL },
});

export default styles;
