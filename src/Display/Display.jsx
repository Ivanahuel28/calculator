import React, { useState } from 'react';
import './Display.css'

export function Display(props) {

    const [value, setValue] = useState(0);


    return <input 
        className='Display'
        type="number"
        inputMode='numeric'
        value={value}
        onChange={(e) => setValue(e.target.value)}/>
}