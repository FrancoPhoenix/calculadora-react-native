import React from 'react'
import { View, Text } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/appTheme';
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
    
    const {
        numero, 
        numeroAnterior, 
        buildNumber, 
        reset, 
        calc, 
        positiveNegative, 
        delNumber, 
        toDividir, 
        toMultiplicar, 
        toRestar, 
        toSumar
    } = useCalculadora();

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
