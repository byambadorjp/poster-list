import React, { useEffect } from 'react';
import {
    View,
    StyleSheet,
    Animated,
    Dimensions
} from 'react-native';
import { Screen } from '../components';


const range = (start: number, end: number, size: number) => {
    let range = new Array(size);
    for (let i = 0; i <= size; i++) {
        range[i] = start + (i * (Math.abs(end - start) / size));
    }
    return range
}


export const TimingSinus = () => {
    const { height, width } = Dimensions.get("window");
    const timing = new Animated.Value(0);
    const deg = timing.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 364]
    })
    const translateX = deg.interpolate({
        inputRange: range(0, 365, 10),
        outputRange: range(0, 365, 10).map((deg) => Math.sin(deg) * (width / 4))
    })
    const translateY = deg.interpolate({
        inputRange: [0, 365],
        outputRange: [0, height - 160]
    })

    useEffect(() => {
        Animated.timing(timing, {
            toValue: 1,
            duration: 2000,
            delay: 2000,
            useNativeDriver: true,
        }).start();
    }, [])

    return (
        <Screen>
            <View style={styles.center}>
                <Animated.View style={[styles.box,
                {
                    transform: [{
                        translateX,
                    }, {
                        translateY
                    }]
                }
                ]}>
                </Animated.View>
            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center'
    },
    box: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'black',
        backgroundColor: 'yellow'
    }
});