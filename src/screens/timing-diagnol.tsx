import React, { useEffect } from 'react';
import {
    StyleSheet,
    Animated,
    Dimensions
} from 'react-native';
import { Screen } from '../components';


export const TimingDiagnol = () => {
    const coordinate = new Animated.ValueXY({x: 0, y: 0});

    const { height, width } = Dimensions.get("window");
    const wHeight = height - 60;
    const wWidth = width;


    useEffect(() => {
        Animated.timing(coordinate, {
            toValue: { 
                x: wWidth - 100, 
                y: wHeight - 100 },
            duration: 1000,
            delay: 2000,
            useNativeDriver: true,
        }).start();
    }, [])

    return (
        <Screen>
            <Animated.View style={[styles.box, {
                transform: [{
                    translateX: coordinate.x
                }, {
                    translateY: coordinate.y
                }]
            }]}>
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