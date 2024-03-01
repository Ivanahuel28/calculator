import React, { useState, useEffect } from 'react';
import './Calculator.css';
import {Display} from '../Display/Display.jsx';
import {ButtonsGrid} from '../ButtonsGrid/ButtonsGrid.jsx';
import { evaluate } from 'mathjs';

export function Calculator(props) {
    
    const [valueToDisplay, setValueToDisplay] = useState('0');

    const calculatorFunctions = {
        
        clear: () => {
            setValueToDisplay(0);
        },

        addSimbol: (simbol) => {
            if ( valueToDisplay == '0') {
                setValueToDisplay(simbol);
            } else {
                setValueToDisplay(String(valueToDisplay) + simbol);
            }
        },

        equal: () => {
            setValueToDisplay(evaluate(valueToDisplay));
        },

        backspace: () => {
            setValueToDisplay(valueToDisplay.slice(0, -1));
        }

    };

    return <div className='Calculator'> 
        <Display value={valueToDisplay} />
        <ButtonsGrid
            calculatorFunctions = {calculatorFunctions}/>
    </div>
}