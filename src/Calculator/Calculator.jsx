import React, { useState, useEffect } from 'react';
import './Calculator.css';
import {Display} from '../Display/Display.jsx';
import {ButtonsGrid} from '../ButtonsGrid/ButtonsGrid.jsx';

export function Calculator(props) {

    const handleKeyPress = (event) => {
        console.log(`Key pressed: ${event.code}`);
        
        console.log(event);

        if ( !isNaN( event.key ) ) {
            setValue( value * 10 + parseInt( event.key ) );
        }  else if (event.key == 'Backspace' && value > 0 )  {
            setValue(parseInt(value/10));
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

    
    const [value, setValue] = useState(0);

    function clear(){
        setValue(0);
    };

    function addNumber(number){
        setValue( value * 10 + parseInt( number ) );
    }
    
    // const functions = [clear, addNumber];

    return <div className='Calculator'> 
        <Display value={value} />
        <ButtonsGrid onClear={clear} onAddNumber={addNumber}/>
    </div>
}