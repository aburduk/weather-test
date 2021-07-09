import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';

export const Footer = ({ navigation, state, props }) => {
    return (
        <View style={styles.footer}>
            <TouchableOpacity 
                onPress={() => {
                    navigation.navigate('Map');
                }}
                style={[styles.button, { marginRight: 10 }]}
            >
                <Icon name="map" style={[styles.buttonIcon, state.index === 0 ? styles.buttonIconActive : null]} />
            </TouchableOpacity>

             <TouchableOpacity 
                onPress={() => {
                    navigation.navigate('Search');
                }}
                style={[styles.button, { marginRight: 10 }]}
            >
                <Icon name="search" style={[styles.buttonIcon, state.index === 1 ? styles.buttonIconActive : null]} />
            </TouchableOpacity>
        </View>
    );
}

export default Footer;