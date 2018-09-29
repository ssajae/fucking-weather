import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {LinearGradient} from 'expo';

export default class Weather extends Component {

    render() {
        return (
            <LinearGradient
                colors={['#00C6FB', '#005BEA']}
                style={styles.container}
            >
                <View style={styles.upperView}>
                    <Text>Icon Here!</Text>
                    <Text style={styles.temp}>24º</Text>
                </View>
                <View style={styles.lowerView}>
                    <Text style={styles.title}>Title Here</Text>
                    <Text style={styles.subtitle}>Text Here</Text>
                </View>
            </LinearGradient>


        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upperView:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    temp : {
        fontSize:38,
        backgroundColor:'transparent',
        color: '#FFF',
        marginTop: 10
    },
    lowerView :{
        flex:1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25
    },
    title :{
        fontSize:38,
        backgroundColor:'transparent',
        color: '#FFF',
        marginBottom: 10,
        fontWeight: '300'
    },
    subtitle:{
        fontSize:28,
        backgroundColor:'transparent',
        color: '#FFF',
        marginBottom:34
    }
});

