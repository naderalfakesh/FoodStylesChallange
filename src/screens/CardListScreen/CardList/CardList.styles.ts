import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 18,
    paddingBottom: 50, // This padding is not mentioned in designs but it is a good practice for list to show the the list has really ended after the last element
  },
  list: { marginTop: 32 },
  card: { marginBottom: 6 },
});
