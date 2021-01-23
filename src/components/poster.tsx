import React, { useEffect } from 'react';
import {Animated, StyleSheet, Easing, View, Dimensions, FlatList, Image} from 'react-native';
import { Screen } from '../components';
const { height, width } = Dimensions.get("window");

export const Poster: React.FC<any> = ({ item, index, scrollY }) => {
    const position = Animated.subtract(index * 200, scrollY);

    const scale = position.interpolate({
        inputRange: [-200, 0, height - 260, height],
        outputRange: [0.5, 1, 1, 0.5],
        // extrapolateRight: 'clamp'
    })

    const opacity = position.interpolate({
        inputRange: [-200, 0, height - 260, height],
        outputRange: [0, 1, 1, 0],
        // extrapolate: 'clamp'
    })


    return <Animated.Image 
        source={{
            uri: item.src
        }}
        style={[styles.poster, {
            transform: [{
                scale
            }],
            opacity
        }]}
    />
}

const styles = StyleSheet.create({
    middle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    poster: {
        height: 200,
        width: 200,
    }
});