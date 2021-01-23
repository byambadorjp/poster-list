import React from 'react';
import {
    View,
    SafeAreaView,
    StatusBar,
    StyleSheet
} from 'react-native';

export const Screen: React.FC<any> = ({ children }) => {

    return (
        <>
            <StatusBar animated barStyle={'light-content'} />
            <SafeAreaView style={styles.full}>
                {children}
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    full: {
        flex: 1,
    }
});
