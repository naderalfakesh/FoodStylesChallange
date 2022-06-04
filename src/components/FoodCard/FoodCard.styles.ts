import { StyleSheet } from 'react-native';
import theme from '../../theme';

const ICON_SIZE = 24;

export const styles = StyleSheet.create({
  container: {
    paddingLeft: 18,
    paddingTop: 18,
    paddingRight: 15,
    paddingBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.WHITE,
    borderRadius: 6,
    shadowColor: theme.colors.GREYISH_40,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 7,
    shadowOpacity: 1,
    elevation: 5, // estimation for android
  },
  title: {
    fontFamily: 'ProximaNovaA-Regular',
    fontWeight: 'bold',
    fontSize: 18,
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: 0,
    color: theme.colors.GREYISH_BROWN,
  },
  optionsContainer: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    borderRadius: ICON_SIZE / 2,
  },
  pressed: { backgroundColor: theme.colors.SECONDARY_BUTTON_BACKGROUND },
  options: { width: ICON_SIZE, height: ICON_SIZE },
});
