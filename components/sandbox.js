import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,  View } from 'react-native';

export default function Sandbox() {
    return (
        <View style={styles.containe}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>three</Text>
            <Text style={styles.boxFour}>four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containe: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingTop: 40,
        backgroundColor: '#ddd',
    },
    boxOne: {
        flex: 1,
        backgroundColor: 'red',
        padding: 10,
    },
    boxTwo: {
        flex: 1,
        backgroundColor: 'yellow',
        padding: 20,
    },
    boxThree: {
        flex: 1,
        backgroundColor: 'green',
        padding: 30,
    },
    boxFour: {
        flex: 1,
        backgroundColor: '#333',
        padding: 10,
    }
});