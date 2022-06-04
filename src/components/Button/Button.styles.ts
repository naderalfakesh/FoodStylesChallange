import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    height: 46,
    marginHorizontal: 18,
    paddingHorizontal: 15,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.WHITE,
    shadowColor: theme.colors.GREYISH_40,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 7,
    shadowOpacity: 1,
    elevation: 5, // estimation for android
  },
  pressed: {
    backgroundColor: theme.colors.SECONDARY_BUTTON_BACKGROUND,
  },
  disabled: {
    backgroundColor: theme.colors.GREYISH_40,
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  loading: {
    marginRight: 10,
  },
});

export default styles;
