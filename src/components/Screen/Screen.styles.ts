import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const GRADIENT_HEIGHT = 157;
export const GRADIENT_OFFSET = 79;

export const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: theme.colors.BACKGROUND_GRAY },
  gradient: { position: 'absolute', top: 0, left: 0, right: 0 },
  secondaryGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -1,
  },
  safeArea: { flex: 1 },
});

export const gradientColors = [theme.colors.ORANGISH, theme.colors.MAIZE];

export const secondaryGradientColors = [
  'rgba(255,255,255,0)',
  'rgba(255,255,255,0.2)',
  'rgba(255,255,255,0.85)',
  theme.colors.BACKGROUND_GRAY,
];
