import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 36,
    height: 36,
    marginBottom: 10,
    marginTop: 42,
  },
  title: {
    fontFamily: theme.fonts.medium,
    fontSize: 20,
    marginBottom: 24,
    color: theme.colors.text_primary
  },
  button: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.surface_secondary,
    borderRadius: 4,
    paddingHorizontal: 24,
    marginBottom: 56
  },
  buttonTitle:{
    fontFamily: theme.fonts.medium,
    fontSize: 14,
    color: theme.colors.text_primary
  }
});