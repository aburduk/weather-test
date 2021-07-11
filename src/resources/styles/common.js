import {StyleSheet, Appearance, Dimensions, Platform} from 'react-native';
import {vw, vh} from 'utils/viewports';

export const darkMode = Appearance.getColorScheme() === 'dark';

export const isAndroid = Platform.OS === 'android';

export const colors = {
  black: '#0C0C0C',
  white: '#FFFFFF',
  lightGrey: '#E5E5E5',
  grey: '#4C5256',
  red: '#FF4921',
  green: '#1DD350',
  blue: '#59A3FF',
  orange: '#FF9921',

  shadowBlack: 'rgba(0, 0, 0, 0.62)',
  opacityBgBlack: 'rgba(0, 0, 0, 0.32)',
};

export const shadow = StyleSheet.create({
  box: {
    backgroundColor: darkMode ? colors.black : colors.white,
    shadowRadius: 34,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    ...Platform.select({
      ios: {
        shadowColor: colors.shadowBlack,
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 1,
      },
      android: {
        position: 'relative',
        // elevation: 15,
      },
    }),
  },
});
