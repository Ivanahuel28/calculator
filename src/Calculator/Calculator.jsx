import React, { useState } from 'react';
import './Calculator.css';
import {Display} from '../Display/Display.jsx';
import {ButtonsGrid} from '../ButtonsGrid/ButtonsGrid.jsx';

export function Calculator(props) {

    const [value, setValue] = useState(0);

    const clear = () => {
        setValue(0);
    };

    const handleInputChange = (e) => {
        // Actualizar el estado del display cuando el usuario introduce un nuevo valor
        setValue(e.target.value);
      };

    /* const functions = {
        executeClear: clear
    }; */

    return <div className='Calculator'> 
        <Display value={value} onChange={handleInputChange}/>
        <ButtonsGrid functions={clear}/>
    </div>
}