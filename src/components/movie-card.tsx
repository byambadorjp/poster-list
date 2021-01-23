import * as React from 'react';
import { StyleSheet, Image, Animated, Dimensions, } from 'react-native';
const { width, height } = Dimensions.get('screen');
const imageW = width * 0.7;
const imageH = imageW * 1.54;

export const MovieCard: React.FC<any> = ({ scrollX, index, item }) => {
    return (
        <Animated.View style={[styles.card, {
            transform: [{
                scale: scrollX.interpolate({
                    inputRange: [(index - 1) * width, index * width, (index + 1) * width],
                    outputRange: [0.5, 1, 0.5],
                    extrapolate: "clamp"
                }),
            }],
            opacity: scrollX.interpolate({
                inputRange: [(index - 1) * width, index * width, (index + 1) * width],
                outputRange: [0, 1, 0],
                extrapolate: "clamp"
            })
        }]}>
            <Image source={{ uri: item }} style={{
                width: imageW,
                height: imageH,
                resizeMode: 'cover',
                borderRadius: 20,
            }} />
        </Animated.View>
    )
};


const styles = StyleSheet.create({
    card: {
        width, 
        justifyContent: 'center', 
        alignItems: 'center', 
        shadowColor: '#000', 
        shadowOpacity: .5, 
        shadowOffset: {
            width: 0, height: 0
        },
        shadowRadius: 20
    }
});

