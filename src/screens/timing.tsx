import React, { useEffect } from 'react';
import {
    StyleSheet,
    Animated,
    Dimensions
} from 'react-native';
import { Screen } from '../components';


export const Timing = () => {
    const x = new Animated.Value(0);

    const { height, width } = Dimensions.get("window");

    useEffect(() => {
        Animated.timing(x, {
            toValue: width - 100,
            duration: 1000,
            useNativeDriver: true,
            delay: 2000
        }).start();
    }, [])

    return (
        <Screen>
            <Animated.View style={[styles.box,
            {
                transform: [{
                    translateX: x,
                }]
            }
            ]}>
            </Animated.View>
        </Screen>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
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