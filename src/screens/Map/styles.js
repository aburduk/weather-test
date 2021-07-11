import {StyleSheet} from 'react-native';
import {vh, vw} from 'utils/viewports';
import {shadow, colors} from 'resources/styles/common';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: vw(100),
    height: '100%',
    zIndex: 1,
  },

  location: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    width: vw(100),
    top: vh(10),
  },

  locationWrapper: {
    ...shadow.box,
    backgroundColor: colors.orange,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },

  locationLabel: {
    color: colors.white,
  },

  marker: {
    ...shadow.box,
    padding: 10,
    borderRadius: 10,
    width: vw(70),
    borderColor: colors.orange,
    borderWidth: 1,
  },

  hold: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 20,
    top: vh(50) - 21,
    zIndex: 3,
  },

  holdIconWrapper: {
    backgroundColor: colors.blue,
    width: 42,
    height: 42,
    textAlign: 'center',
    borderRadius: 42 / 2,
    padding: 10,
    marginBottom: 7,
  },

  holdIcon: {
    color: colors.white,
    fontSize: 20,
  },

  holdText: {
    color: colors.grey,
    fontSize: 11,
  },

  errorWrapper: {
    position: 'absolute',
    top: vh(20),
    zIndex: 20,
    padding: 20,
    margin: 20,
    width: vw(100) - 40,
  },

  error: {
    color: colors.red,
  },
});
