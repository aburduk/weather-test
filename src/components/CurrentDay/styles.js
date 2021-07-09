import {StyleSheet} from 'react-native';
import {vh, vw} from 'utils/viewports';
import {shadow, colors} from 'resources/styles/common';

export default StyleSheet.create({
    item: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        margin: 20,
        ...shadow.box,
        width: vw(100) - 40
    },

    day: {
        fontWeight: 'bold',
        fontSize: 20,
        marginRight: 10,
    },

    temp: {
        fontSize: 14,
        fontWeight:"500",
        marginRight: 10,
    },

    imageWrapper: {
        width: 100,
        height: 100,
        overflow: "hidden",
    },

    mapImageWrapper: {
        width: 50,
        height: 50,
        overflow: "hidden",
    },

    image: {
        resizeMode: "contain",
        width: "100%",
        height: "100%"
    },

    cityName: {
        marginBottom: 10,
        fontWeight: "bold",
        fontSize: 16
    },

    mapCurrentDay: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
});