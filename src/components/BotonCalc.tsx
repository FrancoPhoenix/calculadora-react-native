import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

interface Props {
    texto: String,
    color?: 'grisOscuro' | 'grisClaro' | 'naranja', 
}

export const BotonCalc = ( { texto, color = 'grisClaro' }: Props ) => {
    return (
        <View 
            style={[styleButton.boton, styleButton[color]]}
        >
            <Text style={styleButton.botonTexto}>{texto}</Text>
        </View>
    )
}

const styleButton = StyleSheet.create({
    boton: {
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    grisClaro: {
        backgroundColor: '#9B9B9B'
    },
    grisOscuro: {
        backgroundColor: '#2D2D2D'
    },
    naranja: {
        backgroundColor: '#FF9427'
    },
    botonTexto: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '300'
    }
});
