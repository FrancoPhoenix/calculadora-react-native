import { useRef, useState } from 'react'

enum Operations {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {
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
        } else if (!(numero.startsWith('0') || numero.startsWith('-0'))) {
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

    return {
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
    }
}
