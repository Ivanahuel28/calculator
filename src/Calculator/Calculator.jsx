import React, { useState, useCallback, useEffect } from 'react';
import './Calculator.css';
import {Display} from '../Display/Display.jsx';
import {ButtonsGrid} from '../ButtonsGrid/ButtonsGrid.jsx';

export function Calculator(props) {

    const handleKeyPress = useCallback((event) => {
        console.log(`Key pressed: ${event.code}`);
        
        console.log(event);

        if ( event.key == '1' ) {
            setValue(1);
        } else if (event.key == '2')  {
            console.log(`pulso otra cosa`);
        } else if (event.key == '2')  {
            console.log(`pulso otra cosa`);
        } else if (event.key == '2')  {
            console.log(`pulso otra cosa`);
        }

    }, []);
    
    useEffect(() => {
    // attach the event listener
    document.addEventListener('keydown', handleKeyPress);

    // remove the event listener
    return () => {
        document.removeEventListener('keydown', handleKeyPress);
    };
    }, [handleKeyPress]);

    
    const [value, setValue] = useState(0);

    const clear = () => {
        setValue(0);
    };

    const handleInputChange = (e) => {
        // Actualizar el estado del display cuando el usuario introduce un nuevo valor
        setValue(e.target.value);
      };

    return <div className='Calculator'> 
        <Display value={value} onChange={handleInputChange}/>
        <ButtonsGrid functions={clear}/>
    </div>
}