import React, { useRef, useState } from 'react'
import { View, Text } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/appTheme';

enum Operations {
    sumar, restar, multiplicar, dividir
}

export const CalculadoraScreen = () => {
    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const [numero, setNumero] = useState('0');

    const lastOperation = useRef<Operations>()

    const reset = () => {
        setNumero('0');
        setNumeroAnterior('0');
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

    const delNumber = () => {
        if (numero.length === 1 || (numero.length === 2 && numero.includes('-'))) {
            setNumero('0');
        } else {
            setNumero(numero.slice(0, -1));
        }
    }

    const changeNumberBefore = () => {
        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0, -1));
        } else {
            setNumeroAnterior(numero);
        }

        setNumero('0');
    }

    const toSumar = () => {
        changeNumberBefore();
        lastOperation.current = Operations.sumar
    }

    const toRestar = () => {
        changeNumberBefore();
        lastOperation.current = Operations.restar
    }

    const toMultiplicar = () => {
        changeNumberBefore();
        lastOperation.current = Operations.multiplicar
    }

    const toDividir = () => {
        changeNumberBefore();
        lastOperation.current = Operations.dividir
    }

    const calc = () => {
        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);

        if (num2 === 0) return;

        switch (lastOperation.current) {
            case Operations.sumar:
                setNumero(`${num2 + num1}`);
                break;
        
            case Operations.restar:
                setNumero(`${num2 - num1}`);
                break;
        
            case Operations.multiplicar:
                setNumero(`${num2 * num1}`);
                break;
        
            case Operations.dividir:
                
                if (num1 === 0) {
                    setNumero('0');
                } else {
                    setNumero(`${num2 / num1}`);
                }
                
                break;
        
            default:
                break;
        }

        setNumeroAnterior('0');        
    }

    return (
        <View style={styles.container}>
            {
                (numeroAnterior !== '0') && (
                    <Text style={styles.resultadoSmall}>{ numeroAnterior }</Text>
                )
            }

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
                <BotonCalc texto="del" action={ delNumber } />
                <BotonCalc texto="/" color="naranja" action={ toDividir } />
            </View>

            <View style={styles.fila}>
                <BotonCalc texto="7" action={ buildNumber } color="grisOscuro" />
                <BotonCalc texto="8" action={ buildNumber } color="grisOscuro" />
                <BotonCalc texto="9" action={ buildNumber } color="grisOscuro" />
                <BotonCalc texto="X" action={ toMultiplicar } color="naranja" />
            </View>

            <View style={styles.fila}>
                <BotonCalc texto="4" action={ buildNumber } color="grisOscuro" />
                <BotonCalc texto="5" action={ buildNumber } color="grisOscuro" />
                <BotonCalc texto="6" action={ buildNumber } color="grisOscuro" />
                <BotonCalc texto="-" action={ toRestar } color="naranja" />
            </View>

            <View style={styles.fila}>
                <BotonCalc texto="1" action={ buildNumber } color="grisOscuro" />
                <BotonCalc texto="2" action={ buildNumber } color="grisOscuro" />
                <BotonCalc texto="3" action={ buildNumber } color="grisOscuro" />
                <BotonCalc texto="+" action={ toSumar } color="naranja" />
            </View>

            <View style={styles.fila}>
                <BotonCalc texto="0" action={ buildNumber } color="grisOscuro" ancho />
                <BotonCalc texto="." action={ buildNumber } color="grisOscuro" />
                <BotonCalc texto="=" action={ calc } color="naranja" />
            </View>
        </View>
    )
}
