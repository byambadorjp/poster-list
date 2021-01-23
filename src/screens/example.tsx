import React, { useEffect } from 'react';
import {Animated, StyleSheet, Easing, View, Dimensions, FlatList, Image, PointPropType} from 'react-native';
import { Screen, Poster } from '../components';
const { height, width } = Dimensions.get("window");

const data = [
    {src: 'https://resizing.flixster.com/lnmJWNS-IRlbCqZPm9PM9JJ6UYs=/206x305/v2/https://resizing.flixster.com/yEteZCyA2ymJB5yH_HvPVcATaS8=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzBkMTU2M2M5LWI5OGQtNGVmNi05OGVmLWZjMTc0ZWVlOTk4MC53ZWJw'},
    {src: 'https://resizing.flixster.com/rZ2B6aDNYunF8qCErT1Icie5uHs=/180x267/v1.bTsxMzU1MzU3ODtqOzE4NzI0OzIwNDg7MTUwMDsyMjIy'},
    {src: 'https://resizing.flixster.com/mEhJNLF7nwF3na_J6DceZF3k8d4=/180x267/v1.bTsxMzM3NjQ3MTtqOzE4NzM1OzIwNDg7MzEyOzQ2Mg'},
    {src: 'https://resizing.flixster.com/DJWzNlXWT1MovfI59y492xKBwVY=/180x267/v1.bTsxMzA3MjAwMjtqOzE4NzMzOzIwNDg7MTUwMDsyMjIy'},
    {src: 'https://resizing.flixster.com/DkB0eASdHCR9Iy-s_O-p5kI9T2k=/179x257/v1.bTsxMjc0MjEwODtqOzE4NzMwOzIwNDg7MTA1MDsxNTAw'},
    {src: 'https://resizing.flixster.com/jXFzCVOhAFnGHDSpfJmBSXPaFWE=/180x260/v1.bTsxMTE3MjcwOTtqOzE4Nzc4OzIwNDg7ODEwOzExNzA'},
    {src: 'https://resizing.flixster.com/mEhJNLF7nwF3na_J6DceZF3k8d4=/180x267/v1.bTsxMzM3NjQ3MTtqOzE4NzM1OzIwNDg7MzEyOzQ2Mg'},
    {src: 'https://resizing.flixster.com/DJWzNlXWT1MovfI59y492xKBwVY=/180x267/v1.bTsxMzA3MjAwMjtqOzE4NzMzOzIwNDg7MTUwMDsyMjIy'},
    {src: 'https://resizing.flixster.com/DkB0eASdHCR9Iy-s_O-p5kI9T2k=/179x257/v1.bTsxMjc0MjEwODtqOzE4NzMwOzIwNDg7MTA1MDsxNTAw'},
    {src: 'https://resizing.flixster.com/jXFzCVOhAFnGHDSpfJmBSXPaFWE=/180x260/v1.bTsxMTE3MjcwOTtqOzE4Nzc4OzIwNDg7ODEwOzExNzA'},
    {src: 'https://resizing.flixster.com/mEhJNLF7nwF3na_J6DceZF3k8d4=/180x267/v1.bTsxMzM3NjQ3MTtqOzE4NzM1OzIwNDg7MzEyOzQ2Mg'},
    {src: 'https://resizing.flixster.com/DJWzNlXWT1MovfI59y492xKBwVY=/180x267/v1.bTsxMzA3MjAwMjtqOzE4NzMzOzIwNDg7MTUwMDsyMjIy'},
    {src: 'https://resizing.flixster.com/DkB0eASdHCR9Iy-s_O-p5kI9T2k=/179x257/v1.bTsxMjc0MjEwODtqOzE4NzMwOzIwNDg7MTA1MDsxNTAw'},
    {src: 'https://resizing.flixster.com/jXFzCVOhAFnGHDSpfJmBSXPaFWE=/180x260/v1.bTsxMTE3MjcwOTtqOzE4Nzc4OzIwNDg7ODEwOzExNzA'},
    {src: 'https://resizing.flixster.com/mEhJNLF7nwF3na_J6DceZF3k8d4=/180x267/v1.bTsxMzM3NjQ3MTtqOzE4NzM1OzIwNDg7MzEyOzQ2Mg'},
    {src: 'https://resizing.flixster.com/DJWzNlXWT1MovfI59y492xKBwVY=/180x267/v1.bTsxMzA3MjAwMjtqOzE4NzMzOzIwNDg7MTUwMDsyMjIy'},
    {src: 'https://resizing.flixster.com/DkB0eASdHCR9Iy-s_O-p5kI9T2k=/179x257/v1.bTsxMjc0MjEwODtqOzE4NzMwOzIwNDg7MTA1MDsxNTAw'},
    {src: 'https://resizing.flixster.com/jXFzCVOhAFnGHDSpfJmBSXPaFWE=/180x260/v1.bTsxMTE3MjcwOTtqOzE4Nzc4OzIwNDg7ODEwOzExNzA'},
];

export const Example = () => {
    const scrollY = new Animated.Value(0);

    const onScroll = Animated.event([
        {nativeEvent: {contentOffset: {
            y: scrollY
        }}}
    ], {useNativeDriver: true});

    return (
        <View style={styles.middle}>
            <Animated.FlatList
                data={data}
                renderItem={({index, item}) => <Poster {...{index, item, scrollY}}/>}
                keyExtractor={(_, index) => index.toString()}
                onScroll={onScroll}
            />
        </View>
    )
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