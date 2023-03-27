import React from 'react';
import './Calculator.css';
import {Display} from '../Display/Display.jsx';
import {ButtonsGrid} from '../ButtonsGrid/ButtonsGrid.jsx';

export function Calculator(props) {
    return <div className='Calculator'> 
        <Display/>
        <ButtonsGrid/>
    </div>
}