import React, { useState, useEffect } from 'react';
import './Calculator.css';
import {Display} from '../Display/Display.jsx';
import {ButtonsGrid} from '../ButtonsGrid/ButtonsGrid.jsx';
import { evaluate } from 'mathjs';

export function Calculator(props) {
    
    const [valueToDisplay, setValueToDisplay] = useState('0');
    const [valueOnMemory, setValueOnMemory] = useState('0');

    const calculatorFunctions = {
        clear: () => {
            setValueToDisplay(0);
            setValueOnMemory(0);
        },
        addNumber: (number) => {
            if ( valueToDisplay == '0') {
                setValueToDisplay(number);
            } else {
                setValueToDisplay(String(valueToDisplay) + number);
            }
        },
        addition: () => {
            setValueToDisplay(valueToDisplay + '+');
        },
        subtract: () => {
            setValueToDisplay(valueToDisplay + '-'); 
        },
        equal: () => {
            console.log('hola');
        }
    };

    return <div className='Calculator'> 
        <Display value={valueToDisplay} />
        <ButtonsGrid
            calculatorFunctions = {calculatorFunctions}/>
    </div>
}