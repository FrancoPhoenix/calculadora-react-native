import React, { useState } from 'react'
import { View, Text } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/appTheme';

export const CalculadoraScreen = () => {
    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const [numero, setNumero] = useState('0');

    const reset = () => {
        setNumero('0');
    }

    const buildNumber = ( textNumber: string ) => {
        if (numero.includes('.') && textNumber === '.') return;

        if (numero.startsWith('0') || numero.startsWith('-0')) {
            
            if (textNumber === '.') {
                setNumero( numero + textNumber );
            } else if (textNumber === '0' && numero.includes('.')) {
                setNumero( numero + textNumber );
            } else if (textNumber !== '0' && !numero.includes('.')) {
                setNumero( textNumber );
            } else if (textNumber === '0' && !numero.includes('.')) {
                setNumero( numero );
            } else {
                setNumero( numero + textNumber );
            }
        } else {
            setNumero( numero + textNumber );
        }
    }

    const positiveNegative = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''));
        } else {
            setNumero('-' + numero);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.resultadoSmall}>{ numeroAnterior }</Text>
            <Text 
                style={styles.resultado}
                numberOfLines={ 1 }
                adjustsFontSizeToFit
            >
                { numero }
            </Text>
            
            <View style={styles.fila}>
                <BotonCalc texto="C" action={ reset } />
                <BotonCalc texto="+/-" action={ positiveNegative } />
                <BotonCalc texto="del" action={ reset } />
                <BotonCalc texto="/" color="naranja" action={ reset } />
            </View>

            <View style={styles.fila}>
                <BotonCalc texto="7" action={ buildNumber } color="grisOscuro" />
                <BotonCalc texto="8" action={ buildNumber } color="grisOscuro" />
                <BotonCalc texto="9" action={ buildNumber } color="grisOscuro" />
                <BotonCalc texto="X" action={ reset } color="naranja" />
            </View>

            <View style={styles.fila}>
                <BotonCalc texto="4" action={ buildNumber } color="grisOscuro" />
                <BotonCalc texto="5" action={ buildNumber } color="grisOscuro" />
                <BotonCalc texto="6" action={ buildNumber } color="grisOscuro" />
                <BotonCalc texto="-" action={ reset } color="naranja" />
            </View>

            <View style={styles.fila}>
                <BotonCalc texto="1" action={ buildNumber } color="grisOscuro" />
                <BotonCalc texto="2" action={ buildNumber } color="grisOscuro" />
                <BotonCalc texto="3" action={ buildNumber } color="grisOscuro" />
                <BotonCalc texto="+" action={ reset } color="naranja" />
            </View>

            <View style={styles.fila}>
                <BotonCalc texto="0" action={ buildNumber } color="grisOscuro" ancho />
                <BotonCalc texto="." action={ buildNumber } color="grisOscuro" />
                <BotonCalc texto="=" action={ reset } color="naranja" />
            </View>
        </View>
    )
}
