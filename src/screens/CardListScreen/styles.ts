import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: theme.colors.BACKGROUND_GRAY },
  gradient: { height: 157 },
  secondaryGradient: {
    height: 80,
    position: 'absolute',
    top: 79,
    left: 0,
    right: 0,
  },
});
