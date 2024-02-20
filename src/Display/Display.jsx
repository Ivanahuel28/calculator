import React, { useState } from 'react';
import './Display.css'

export function Display({value}) {

    const valueToDisplay = value;

    return <input 
        className='Display'
        placeholder="Ingrese números"
        type="text"
        value={valueToDisplay}
        readOnly
        />
}