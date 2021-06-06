import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
    texto: String,
    color?: 'grisOscuro' | 'grisClaro' | 'naranja', 
    ancho?: Boolean
}

export const BotonCalc = ( { texto, color = 'grisClaro', ancho = false }: Props ) => {
    return (
        <TouchableOpacity>
            <View 
                style={[styleButton.boton, styleButton[color], { width: ancho ? 180 : 80 }]}
            >
                <Text style={styleButton.botonTexto}>{texto}</Text>
            </View>
        </TouchableOpacity>
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
