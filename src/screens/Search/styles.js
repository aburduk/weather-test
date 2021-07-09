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
    width: vw(100) - 80,
    borderColor: colors.lightGrey,
    borderWidth: 1,
  },

  button: {
    width: 20,
    marginLeft: 20,
  },

  buttonIcon: {
    color: colors.white,
  },
});
