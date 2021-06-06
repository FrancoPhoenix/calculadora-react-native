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
                <BotonCalc texto="C" />
                <BotonCalc texto="+/-" />
                <BotonCalc texto="del" />
                <BotonCalc texto="/" color="naranja" />
            </View>

            <View style={styles.fila}>
                <BotonCalc texto="7" color="grisOscuro" />
                <BotonCalc texto="8" color="grisOscuro" />
                <BotonCalc texto="9" color="grisOscuro" />
                <BotonCalc texto="X" color="naranja" />
            </View>

            <View style={styles.fila}>
                <BotonCalc texto="4" color="grisOscuro" />
                <BotonCalc texto="5" color="grisOscuro" />
                <BotonCalc texto="6" color="grisOscuro" />
                <BotonCalc texto="-" color="naranja" />
            </View>

            <View style={styles.fila}>
                <BotonCalc texto="1" color="grisOscuro" />
                <BotonCalc texto="2" color="grisOscuro" />
                <BotonCalc texto="3" color="grisOscuro" />
                <BotonCalc texto="+" color="naranja" />
            </View>

            <View style={styles.fila}>
                <BotonCalc texto="0" color="grisOscuro" ancho />
                <BotonCalc texto="." color="grisOscuro" />
                <BotonCalc texto="=" color="naranja" />
            </View>
        </View>
    )
}
