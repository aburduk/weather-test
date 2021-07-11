import {StyleSheet} from 'react-native';
import {vh, vw} from 'utils/viewports';
import {shadow, colors} from 'resources/styles/common';

export default StyleSheet.create({
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: vh(7),
    width: vw(100),
    height: 64,
    zIndex: 5,
    backgroundColor: 'transparent',
  },

  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
    width: 52,
    height: 52,
    borderRadius: 52 / 2,
  },

  buttonIcon: {
    color: colors.lightGrey,
    fontSize: 15,
  },

  buttonIconActive: {
    color: colors.orange,
  },
});
