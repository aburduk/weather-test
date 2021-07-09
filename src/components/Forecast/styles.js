import {StyleSheet} from 'react-native';
import {vh, vw} from 'utils/viewports';
import {shadow, colors} from 'resources/styles/common';

export default StyleSheet.create({
    forecastItemWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
        margin: 20,
        marginBottom: 5,
        marginTop: 5,
        width: vw(100) - 40,
        ...shadow.box,
        backgroundColor: colors.opacityBgBlack,
    }, 
    day: {
        backgroundColor: colors.grey,
        padding: 7,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10,
    },

    dayText: {
        fontSize: 16,
        color: colors.white,
        fontWeight: "400",
    },

    temp: {
        fontSize: 14,
        color:"white",
        fontWeight:"200",
    },

    imageWrapper: {
        width: 40,
        height: 40,
        overflow: "hidden"
    },

    image: {
        resizeMode: "contain",
        width: "100%",
        height: "100%"
    }, 
})