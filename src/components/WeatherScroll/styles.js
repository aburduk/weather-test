import {StyleSheet} from 'react-native';
import {vh, vw} from 'utils/viewports';
import {shadow, colors} from 'resources/styles/common';

export default StyleSheet.create({
  scrollView: {
    flex:1,
    position: 'absolute',
    height: "100%",
    width: vw(100),
    paddingTop: vh(13),
    zIndex: 1,
  },

  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    margin: 20,
    ...shadow.box,
  },

  day: {
    fontWeight: 'bold',
    fontSize: 14,
    width: vw(100) - 140,
  },

  temp: {
    width: 30,
  },

  weatherIcon: {
    width: 30,
    color: colors.orange,
  },

  currentDayWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    margin: 20,
    ...shadow.box,
  }
});
