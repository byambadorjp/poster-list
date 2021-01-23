import React, { useEffect } from 'react';
import {Animated, StyleSheet, Easing, View, Dimensions} from 'react-native';
import { Screen } from '../components';
const { height, width } = Dimensions.get("window");

const getRange = (start: number, end: number, size: number) => {
    const range = new Array(size).fill(0);
    return range.map((item, index) => start + index * (end - start) / size);
}

export const Linear = () => {
    const animate = new Animated.Value(0);
    
    const translateY = animate.interpolate({
        inputRange: [0, 1],
        outputRange: [0, height - 160]
    })

    const deg = animate.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 2 * Math.PI]
    })

    const translateXBySinus = deg.interpolate({
        inputRange: getRange(0, 2 * Math.PI, 360),
        outputRange: getRange(0, 2 * Math.PI, 360).map((x) => Math.sin(x) * (width / 4))
    })

    const scale = deg.interpolate({
        inputRange: getRange(0, 2 * Math.PI, 360),
        outputRange: getRange(0, 2 * Math.PI, 360).map((x) => Math.abs(Math.min(0.5 + Math.cos(x), 1)))
    })

    useEffect(() => {
        Animated.timing(
            animate,
            {
                toValue: 1,
                duration: 2000,
                delay: 1000,
                useNativeDriver: true
            }
        ).start()
    }, [])

    return (
        <Screen>
            <View style={styles.middle}>
                <Animated.View style={[ styles.circle, 
                    {
                        transform: [{
                            translateX: translateXBySinus
                        }, {
                            translateY
                        }, {
                            scale
                        }],
                    }
                ]}>
                </Animated.View>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    middle: {
        flex: 1,
        alignItems: 'center'
    },
    circle: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderColor: 'black',
        borderWidth: 2,
        borderStyle: 'solid',
        backgroundColor: 'yellow'
    }
});