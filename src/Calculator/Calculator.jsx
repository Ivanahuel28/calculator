import React, { useState, useEffect } from 'react';
import './Calculator.css';
import {Display} from '../Display/Display.jsx';
import {ButtonsGrid} from '../ButtonsGrid/ButtonsGrid.jsx';
import { evaluate } from 'mathjs';

export function Calculator(props) {

    const handleKeyPress = (event) => {

        if ( !isNaN( event.key ) ) {
            setValueToDisplay( valueToDisplay * 10 + parseInt( event.key ) );
        }  else if (event.key == 'Backspace' && valueToDisplay > 0 )  {
            setValueToDisplay(parseInt(valueToDisplay/10));
        }

    };
    
   useEffect(
        () => {
    // attach the event listener
            document.addEventListener('keydown', handleKeyPress);

    // remove the event listener
            return () => {
                document.removeEventListener('keydown', handleKeyPress);
            };
    }, [handleKeyPress]);
    
    const [valueToDisplay, setValueToDisplay] = useState(0);
    const [valueOnMemory, setValueOnMemory] = useState(0);

    const calculatorFunctions = {
        clear: () => {
            setValueToDisplay(0);
            setValueOnMemory(0);
        },
        addNumber: (number) => {
            console.log('hola');
        },
        addition: () => {

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