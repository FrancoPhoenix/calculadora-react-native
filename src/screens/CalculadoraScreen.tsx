import React from 'react'
import { View, Text } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/appTheme';

export const CalculadoraScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.resultadoSmall}>1,500.00</Text>
            <Text style={styles.resultado}>1,500.00</Text>
            
            <View style={styles.fila}>
                <BotonCalc texto="C" color="naranja" />
                <BotonCalc texto="+/-" color="grisOscuro" />
                <BotonCalc texto="del" />
                <BotonCalc texto="/" />
            </View>
        </View>
    )
}
