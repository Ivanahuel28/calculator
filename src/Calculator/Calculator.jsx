import React from 'react';
import './Calculator.css';
import {Display} from '../Display/Display.jsx';
import {ButtonsGrid} from '../ButtonsGrid/ButtonsGrid.jsx';

export function Calculator(props) {

    const clear = () => {
        alert('¡Me hiciste clic en '  + "!");
    }

    const functions = {
        executeClear: clear
    };

    return <div className='Calculator'> 
        <Display/>
        <ButtonsGrid functions={functions}/>
    </div>
}