import {StyleSheet} from 'react-native';
import {vh, vw} from 'utils/viewports';
import {shadow, colors} from 'resources/styles/common';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    zIndex: 2,
    top: vh(3),
  },

  input: {
    ...shadow.box,
    marginTop: 20,
    marginBottom: 20,
    height: 40,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    width: vw(100) - 100,
    borderColor: colors.lightGrey,
    borderWidth: 1,
  },

  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },

  buttonIcon: {
    color: colors.white,
  },

  errorWrapper: {
    ...shadow.box,
    padding: 20,
    margin: 20,
    width: vw(100) - 40,
  },

  error: {
    color: colors.red,
  },
});
