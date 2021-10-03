import {DefaultTheme} from '@react-navigation/native';
import {primaryColor} from '../constants/strings';

export const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: primaryColor,
  },
};
